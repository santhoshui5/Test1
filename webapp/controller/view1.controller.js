sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("Root.webapp.controller.view1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Root.view.view1
		 */
		 onItemPress:function(oEvent){
		 	var selItem = oEvent.getParameter("listItem");
		 	var spath = selItem.getBindingContextPath();
		 	var idx = spath.split("/")[spath.split("/").length - 1];
		 	debugger;
		 /*	var a = this.getView().getParent().getParent().getDetailPages()[0];
		 	a.bindElement(selItem.getBindingContextPath());*/
		 /*	a.bindElement("{/supplier}");*/
		 	this.onNext(idx);

		 	
		 },
		 onSearch:function(oEvent){
		 	debugger;
		 	var whatToSearch = oEvent.getParameter("query");
		 	var oFilter = new Filter("name",FilterOperator.Contains, whatToSearch);
		 	var oFilter1 = new Filter("type",FilterOperator.Contains, whatToSearch);
		 	var oFFilter = new Filter({filters:[oFilter1,oFilter],
		 							  and:false
		 	});
		 	this.getView().byId("idListV1").getBinding("items").filter(oFFilter);
		 },
		 
		onNext: function(fid) {
			debugger;
			this.oRouter.navTo("tulasi",{
				fid:fid
			});
						
/*			var oAppCont = this.getView().getParent();
			oAppCont.to("idV2");
*/		},
		
		onInit: function () {
			this.oRouter=this.getOwnerComponent().getRouter();
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Root.view.view1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Root.view.view1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Root.view.view1
		 */
		//	onExit: function() {
		//
		//	}

	});

});