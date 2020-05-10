sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Root/webapp/model/model"
], function (Controller, models) {
	"use strict";


	return Controller.extend("webapp.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf webapp.view.App
		 */
		onInit: function () {
			var oModel=models.createFruitModel();			
			var oView1 = new sap.ui.view("idV1",{
				viewName: "Root.webapp.view.view1",
				type: sap.ui.core.mvc.ViewType.XML
			});
			
			oView1.setModel(oModel);
			
			var oView2 = new sap.ui.view("idV2",{
				viewName: "Root.webapp.view.view2",
				type: sap.ui.core.mvc.ViewType.XML
			});
			
			oView2.setModel(oModel);
			
			var oView3 = new sap.ui.view("idV3",{
				viewName: "Root.webapp.view.ListControl",
				type: sap.ui.core.mvc.ViewType.XML
			});			
			
			var oAppCont = this.getView().byId("App_id");
			
			debugger;
			oAppCont.addPage(oView1);
			oAppCont.addPage(oView2);
/*			oAppCont.addPage(oView3);*/
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf webapp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf webapp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf webapp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});