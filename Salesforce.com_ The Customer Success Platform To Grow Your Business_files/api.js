if (typeof(Vidyard) !== 'object') {
  var Vidyard = {
    _players: {}    //stores uuid strings or player objects pushed from js_embed on page load.
  };
}

Vidyard.players = function () {
  return this.init();
};

Vidyard.players.prototype.init = function () {
  for (var key in Vidyard._players) {
    if ((Vidyard._players.hasOwnProperty(key)) && (typeof Vidyard._players[key] !== 'object')) {
      Vidyard._players[key] = new Vidyard.player(key);
    }
  }
  return Vidyard._players;
};

Vidyard.player = function (playerUUID){
  if (typeof Vidyard._players[playerUUID] === 'object') {
    return Vidyard._players[playerUUID]
  } else {
    var self = this;

    var callbackStore = {
      ready: [],
      timeupdate: [],
      play: [],
      pause: [],
      seek: [],
      beforeSeek: [],
      chapterComplete: [],
      playerComplete: [],
      volumeChange: [],
      createCta: [],
      fullScreenChange: []
    };

    var previousTime = null;

    this.status = null;

    this.on = function (event, callback) {
      if (event === 'complete') {
        if (typeof console !== "undefined" && console.error) {
          console.error("The 'complete' event is being deprecated. Please use the 'chapterComplete' or 'playerCompete' instead.");
          event = 'playerComplete';
        }
      }

      if (callbackStore[event]) {
        callbackStore[event].push(callback);
      } else {
        callbackStore[event] = [callback];
      }
    };

    this.off = function (event, callback) {
      if (event === undefined) {
        for (var evt in callbackStore) {
          callbackStore[evt] = [];
        }
      }
      else if (callbackStore[event]) {
        if (callback) {
          var index = callbackStore[event].indexOf(callback);
          if (index > -1) {
            callbackStore[event].splice(index, 1);
          }
        } else {
          callbackStore[event] = [];
        }
      }
    };

    _onMessage = function (event) {
      if (event.origin === window.location.protocol + '//play.vidyard.com') {
        var data = JSON.parse(event.data);

        if (self.uuid && data['uuid'] !== self.uuid) {
          return;
        }

        if (typeof data['status'] === 'object') {
          self.status = data['status'];
        }

        if (typeof data['metadata'] === 'object') {
          self.metadata = data['metadata'];
        }

        if (self.status.currentTime !== previousTime) {
          for (var i = 0; i < callbackStore['timeupdate'].length; i++) {
            callbackStore['timeupdate'][i].call(self, self.status.currentTime);
          }
        }
        previousTime = self.status.currentTime;

        if (data['event']  === 'playerResize') {
          var $playerIframe = $("#vidyard_iframe_" + playerUUID);
          var iframeWidth = $playerIframe.width();
          var resizeNeeded = data['params'][1];
          if (resizeNeeded) {
            $playerIframe.width(iframeWidth + data['params'][0] + 31);
          }
        }

        if (typeof data['event'] === 'string' && callbackStore[data['event']]) {
          for (var i = 0; i < callbackStore[data['event']].length; i++) {
            callbackStore[data['event']][i].call(self, data['params']);
          }
        }
      }
    };

    if (!window.addEventListener) {
      window.attachEvent("onmessage", _onMessage);
    } else {
      window.addEventListener("message", _onMessage, false);
    }

    this.init(playerUUID);
  }
};

Vidyard.player.prototype.init = function (playerUUID) {
  var self = this;
  var assignIframe = function (shouldFallback) {
    if (playerUUID) {
      self.uuid = playerUUID;
      var playerIframe = document.getElementById("vidyard_iframe_" + playerUUID);
      if (!playerIframe) {
        if (shouldFallback) {
          var script = document.getElementById("vidyard_embed_code_" + playerUUID);
          if (script) {
            self.on('ready', function () {
              assignIframe(false);
            });
          }
        } else {
          throw "Player with UUID '" + playerUUID + "' not found!";
        }
      }
      self.iframe = playerIframe;
    }
  }
  assignIframe(true);
  Vidyard._players[playerUUID] = self;
};

Vidyard.player.prototype._postMessage = function (options) {
  options['uuid'] = this.uuid;
  if (this.iframe) {
    if (!!window.postMessage) {
      this.iframe.contentWindow.postMessage(JSON.stringify(options), window.location.protocol + '//play.vidyard.com');
    }
  } else {
    throw "Could not find iframe to postMessage to!"
  }
};

/* API Methods */
Vidyard.player.prototype.play = function () {
  this._postMessage({ 'event': "play" });
};

Vidyard.player.prototype.pause = function () {
  this._postMessage({ 'event': 'pause' });
};

Vidyard.player.prototype.resume = function () {
  this._postMessage({ 'event': 'resume' });
};

Vidyard.player.prototype.seek = function (position) {
  this._postMessage({
    'event': 'seek',
    'position': position
  });
};

Vidyard.player.prototype.setVolume = function (new_volume) {
  this._postMessage({
    'event': 'setVolume',
    'new_volume': new_volume
  });
};

Vidyard.player.prototype.playChapter = function (chapter_index) {
  this._postMessage({
    'event': 'playChapter',
    'chapter_index': chapter_index
  });
};

Vidyard.player.prototype.createCta = function (attributes) {
  // Mandatory to add chapter_id to attributes object
  attributes = $.extend({
    start: 0,
    duration: 10,
    width: 300,
    fullscreen: false,
    html: '',
    opacity: 1.0,
    display_once: false
  }, attributes);

  this._postMessage({
    'event': 'createCta',
    'attributes': attributes
  });
};

Vidyard.player.prototype.updateCta = function(cta_id, attributes) {
  this._postMessage({
    'event': 'updateCta',
    'id': cta_id,
    'attributes': attributes
  });
};

Vidyard.player.prototype.getCurrentChapter = function () {
  if (this.status === null) {
    return null;
  }

  return this.status.chapterIndex;
};

Vidyard.player.prototype.currentTime = function () {
  if (this.status === null) {
    return null;
  }

  return this.status.currentTime;
};

Vidyard.player.prototype.resetPlayer = function () {
  // Returns the player to the state before the user has clicked the play button.

  this._postMessage({
    'event': 'resetPlayer'
  });
};

Vidyard.player.prototype.enableCaption = function (language, label) {
  this._postMessage({
    'event': 'enableCaption',
    'language': language,
    'label': label
  });
};

Vidyard.player.prototype.disableCaption = function (language, label) {
  this._postMessage({
    'event': 'disableCaption',
    'language': language,
    'label': label
  });
};
