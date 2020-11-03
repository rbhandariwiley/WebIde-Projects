function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZQTC_FUTURE_RENEWAL_PLAN_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}