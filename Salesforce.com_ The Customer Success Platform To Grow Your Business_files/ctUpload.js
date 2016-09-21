if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
};

if (typeof ClickTaleUploadPage === 'function' && window.ClickTaleSettings.PTC.UseTransport) {
    if (window.ClickTaleSettings.PTC.EnableChangeMonitor) {
        if (typeof ClickTaleEvent === "function") {
            ClickTaleEvent("CM");
        }
    }
    ClickTaleUploadPage();
    if (typeof ClickTale === 'function') {
        ClickTale(window.ClicktaleProjectID, window.ClicktaleRecordingRatio, window.ClicktalePartitionID);
    }
};