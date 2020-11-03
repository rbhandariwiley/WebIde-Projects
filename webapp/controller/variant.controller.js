sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/vm/ZVM/model/layout",
	"sap/ui/table/TablePersoController"
], function (Controller, layout, TablePersoController) {
	"use strict";

	return Controller.extend("com.vm.ZVM.controller.variant", {
		onInit: function () {

		},

		onAfterRendering: function () {
			this._pdfViewer = new sap.m.PDFViewer();
			this.getView().addDependent(this._pdfViewer);
			this._oTPC = new TablePersoController({
				table: this.getView().byId("DemoTableUI"),
				persoService: layout
			});

			this.createLayoutVariantManagerTool(this.getView().byId("filterBar"),
				this.getView().byId("idVariantManagerToolBar"));
		},

		onPdfViewer: function () {
			this._pdfViewer.setSource(sap.ui.require.toUrl("com/vm/ZVM") + "/Images/AdvanceNotif.pdf");
			this._pdfViewer.open();
		},

		createLayoutVariantManagerTool: function (oToolbar, oSmartVariantManagement) {
			var oPersInfo = new sap.ui.comp.smartvariants.PersonalizableInfo({
				type: "toolBar",
				keyName: "persistenceKey"
			});
			oPersInfo.setControl(oToolbar);
			var oLayout = layout;
			var that = this;
			this._standardLayout = true;
			oToolbar.fetchVariant = function () {
				var oVariant = {};
				if (!oLayout._oBundle || oLayout._oBundle === {}) {} else {
					oVariant.Layout = oLayout._oBundle;
				}
				return oVariant;
			};
			//var oTable = this.getView().byId("DemoTableUI");
			oToolbar.applyVariant = function (oVariant) {
				if (that._oTPC) {
					that._oTPC.getPersoService().setPersData(oVariant.Layout);
					that._oTPC.refresh();
				}
			};
			oSmartVariantManagement.addPersonalizableControl(oPersInfo);
			this._fInitialiseVariants = jQuery.proxy(this._initialiseVariants, this);
			//oSmartVariantManagement.attachInitialise(this._fInitialiseVariants);
			oSmartVariantManagement.initialise(this._initialiseVariants, oToolbar);
		},
		onPersoButtonPressed: function (oEvent) {
			this._oTPC.openDialog();
			this.getView().byId("idVariantManagerToolBar").currentVariantSetModified(true);
		},
		_initialiseVariants: function (oEvent) {
			this._oLayoutVariantInitialized = true;
		}

	});
});