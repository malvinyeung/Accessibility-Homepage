_satellite.pushBlockingScript(function(event, target, $variables){
  if (typeof mboxVersion !== 'undefined' && mboxVersion !== 58) {
	s.prop75 = Page.getName() + '|' + mboxVersion;
}

if (Page.hasLeadCaptureForm()) {
  s.eVar71 = $('#PartnerPromoCode').attr('value');
  s.eVar72 = $('#mcloudFormName').attr('value');
}
});
