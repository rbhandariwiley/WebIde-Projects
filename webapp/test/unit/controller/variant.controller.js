/*global QUnit*/

sap.ui.define([
	"com/vm/ZVM/controller/variant.controller"
], function (Controller) {
	"use strict";

	QUnit.module("variant Controller");

	QUnit.test("I should test the variant controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});