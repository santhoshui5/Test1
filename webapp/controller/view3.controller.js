sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Root/webapp/model/model"
], function (Controller, models) {
	"use strict";

	return Controller.extend("Root.webapp.controller.view3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Root.webapp.view.view3
		 */
		onInit: function () {
debugger;
			var oModel = models.createFruitModel();
			this.getView().setModel(oModel);

			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.fid, this);
		},
		
			   fid: function (oEvent) {
			debugger;
			var findex = oEvent.getParameter("arguments").fid;
			var spath = "/supplier/" + findex;
			this.getView().bindElement(spath);
		},


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Root.webapp.view.view3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Root.webapp.view.view3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Root.webapp.view.view3
		 */
		//	onExit: function() {
		//
		//	}

	});

});