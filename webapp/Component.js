sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/vm/ZVM/model/models",
	"sap/ui/fl/FakeLrepConnectorLocalStorage"
], function (UIComponent, Device, models, FakeLrepConnectorLocalStorage) {
	"use strict";

	return UIComponent.extend("com.vm.ZVM.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			//FakeLrepConnectorLocalStorage.enableFakeConnector(sap.ui.require.toUrl("sap/ui/demo/smartControls/lrep/component-test-changes.json"));

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
		// destroy: function () {
		// 	FakeLrepConnectorLocalStorage.disableFakeConnector();
		// 	UIComponent.prototype.destroy.apply(this, arguments);
		// }
	});
});