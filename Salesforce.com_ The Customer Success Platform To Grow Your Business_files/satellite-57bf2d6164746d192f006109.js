_satellite.pushBlockingScript(function(event, target, $variables){
  (function () {

    window.ClicktaleProjectID = 38971;
    window.ClicktaleRecordingRatio = 0.1;
    window.ClicktalePartitionID = "www02";
    window.ClickTaleScriptSource = (document.location.protocol === "https:" ? "https://" : "http://") + 'www.salesforce.com/common/assets/js/clicktale/';

    if (typeof (ClickTaleCreateDOMElement) != "function") {
        ClickTaleCreateDOMElement = function (tagName) {
            if (document.createElementNS) {
                return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
            }
            return document.createElement(tagName);
        }
    }

    if (typeof (ClickTaleAppendInHead) != "function") {
        ClickTaleAppendInHead = function (element) {
            var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
            parent.appendChild(element);
        }
    }

    if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function") {
        ClickTaleXHTMLCompliantScriptTagCreate = function (code) {
            var script = ClickTaleCreateDOMElement('script');
            script.setAttribute("type", "text/javascript");
            script.text = code;
            return script;
        }
    }

    var ctDiv = document.createElement("div");
    ctDiv.setAttribute("id", "ClickTaleDiv");
    ctDiv.setAttribute("name", "ClickTaleDiv");
    ctDiv.setAttribute("style", "display: none;");
    document.body.appendChild(ctDiv);

    var ctSettings = document.createElement("script");
    ctSettings.src = window.ClickTaleScriptSource + "ctSettings.js";
    document.body.appendChild(ctSettings);

    ctSettings.addEventListener("load", function () {
        var ctWebRecorder = document.createElement("script");
        ctWebRecorder.src = window.ClickTaleScriptSource + "WRf7.js";
        document.body.appendChild(ctWebRecorder);

        ctWebRecorder.addEventListener("load", function () {
            var ctUpload = document.createElement("script");
            ctUpload.src = window.ClickTaleScriptSource + "ctUpload.js";
            document.body.appendChild(ctUpload);

            ctUpload.addEventListener("load", function () {
                var ctCustomCode = document.createElement("script");
                ctCustomCode.src = window.ClickTaleScriptSource + "ctCustomCode.js";
                document.body.appendChild(ctCustomCode);
            }, false);

        }, false);

    }, false);
})();



//ClickTale Integration Start
function clickTaleGetUID_PID() {
    if (document.cookie.indexOf("WRUID") > -1 && document.cookie.indexOf("WRIgnore=true") == -1) {
        var ca = document.cookie.split(';');
        var PID = 0, UID = 0;
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf("CT_Data") > -1) PID = c.substring(c.indexOf("apv_")).split("_")[1];
            if (
              ((document.cookie.match(/WRUID/g) || []).length == 1 && c.indexOf("WRUID") > -1) ||
              (c.indexOf("WRUID") > -1 && (document.cookie.match(/WRUID/g) || []).length > 1 && c.indexOf("WRUID=") == -1)
            )
                UID = c.split("=")[1];
        }
        return (UID == 0 || PID == 0) ? null : (UID + "." + PID);
    }
    else
        return null;
}
var clickTaleValues = clickTaleGetUID_PID();
if (clickTaleValues != null) {
    s.eVar77 = clickTaleValues;
}


});
