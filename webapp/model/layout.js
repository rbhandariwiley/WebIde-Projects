sap.ui.define(
		["sap/ui/core/UIComponent", "sap/m/MessageBox"],
		function (UIComponent, MessageBox) {
			"use strict";

			return {

				oData: {},

				getPersData: function () {
					var oDeferred = new jQuery.Deferred();
					if (!this._oBundle) {
						this._oBundle = this.oData;
					}
					var oBundle = this._oBundle;
					oDeferred.resolve(oBundle);
					return oDeferred.promise();
				},

				setPersData: function (oBundle) {
					var oDeferred = new jQuery.Deferred();
					this._oBundle = oBundle;

					oDeferred.resolve();
					return oDeferred.promise();
				},

				delPersData: function () {
					var oDeferred = new jQuery.Deferred();
					oDeferred.resolve();
					return oDeferred.promise();
				}

			};
		});