_satellite.pushBlockingScript(function(event, target, $variables){
  // utility to make sure we want to add this driver to the s.products list
Page.isValidDynamicComponentLink = function(linkObj) {
    // nothing that's not a valid link
    // nothing without d=
    // nothing that's not a /form/ link (unless on blog)
    // make sure it's visible and it's parents are visible

    var requiresLinkToForm =  (typeof Page === 'object' && Page.getName().indexOf('SFDC:us:blog') > -1) ? false : true;  
    
    var href = Util.getHref(linkObj), isTracked = true, $ = jQuery;
    if (!href) {
        return false;
    } else if (!Util.getParam('d', href)) {
        return false;
    } else if (requiresLinkToForm && href.indexOf('/form/') === -1) {
        return false;
    } else {
        try {
            (function($, page) {
                $(linkObj).parents().each(function(){
                    if ($(this).css('display') == 'none' || $(this).css('visibility') == 'hidden') {
                        isTracked = false;
                        return false;
                    }
                });
            })(jQuery, this);
        } catch(ex) {
            // do nothing
        }
        if (isTracked == false) {
            return false;
        }
    }
    return true;
}



var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback(mutations);
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

// Observe '.campaign' DOM elements:
var $teaserlist = $('.campaign');
var teaseridlist = [];
var mutationcounter = 0;
$teaserlist.each(function(){
    teaseridlist.push($(this).attr('id'));
});

// reset current Page.ctas list
Page.ctas = [];
Page.noclosure_ctas = [];

$(teaseridlist).each(function(i){
        observeDOM( document.getElementById(teaseridlist[i]) ,function(mutations){ 

        var driver = offerid = type = _location = '';
        var teaserTrackingString = [];
        var $a, _cl, currentDriver;

        for (var c = 0; c < mutations.length; c++) {
            if (mutations[c].addedNodes && mutations[c].addedNodes.length > 0) {
                // DOM updated with AEM campaign 
                $anchors = $(mutations[c].addedNodes[0].innerHTML).find('a');

                $anchors.each(function(){
                  if(Page.isValidDynamicComponentLink(this)) {
                    currentDriver = Util.getParam('d', Util.getHref(this)).length == 15 ? Util.convert15To18(Util.getParam('d', Util.getHref(this))) : Util.getParam('d', Util.getHref(this));
                    if ($.inArray(currentDriver, Page.ctas) === -1){
                      Page.ctas.push(currentDriver);
                    }
                  }
                });

                mutationcounter += 1;
            }
        }

        // we've processed all of the links with drivers from the dynamic blobs served by the client context
        if (mutationcounter === teaseridlist.length) {
            s.products = digitalData.util.trackCTAs(Page.getCTAs());
            s.linkTrackVars = s.apl(s.linkTrackVars,'products',',',2);
            digitalData.util.trackActivity(digitalData.page.pagename + '|dynamic_component_tracking', {events:["event19"]});
        }
    });
});
});
