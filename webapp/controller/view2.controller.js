sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"Root/webapp/model/model",
	"sap/ui/core/routing/History"
], function (Controller, msgBox, msgToast, models, History) {
	"use strict";

	return Controller.extend("webapp.controller.view2", {
		onBack: function () {
			/*	var oAppcont = this.getView().getParent();
				oAppcont.to("idV1");*/
			/*			var previousHash = History.getInstance().getPreviousHash();
						this.oRouter.navTo(previousHash);*/
			window.history.go(-1);

		},
		onClick: function(){
			msgToast.show("Standard Sap button Clicked");	
		},
		onSelectSupplier: function (oEvent) {
			debugger;
			var oSelItem = oEvent.getParameter("listItem");
			var spath = oSelItem.getBindingContextPath();
			var idx = spath.split("/")[spath.split("/").length - 1];
			this.onNext(idx);
		},

		
		onNext: function (fid) {
			this.oRouter.navTo("sony", {
				fid: fid
			});
		},
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf webapp.view.view2
		 */
		onSave: function () {
			msgBox.confirm("Do you want to save?", {
				onClose: this.onClose
			});
		},
		oPopupSupplier: null,
		oPopupCities: null,

		onClose: function (args) {
			if (args === "OK") {
				msgToast.show("Save successful");
			} else {
				msgBox.error("Object could not be saved");
			}
		},
		fieldId: "",

		onConfirm: function (oEvent) {
			debugger;
			var oSelItem = oEvent.getParameter("selectedItem");
			var cityName = oSelItem.getTitle();
			sap.ui.getCore().byId(this.fieldId).setValue(cityName);

		},
		onF4Help: function (oEvent) {
			this.fieldId = oEvent.getSource().getId();
			/*			msgToast.show("Please check later");*/
			if (!this.oPopupCities) {
				debugger;
				this.oPopupCities = new sap.ui.xmlfragment("Root.webapp.fragments.popup");
				this.getView().addDependent(this.oPopupCities);
				this.oPopupCities.setMultiSelect(false);
				this.oPopupCities.bindAggregation("items", {
					path: "/cities",
					template: new sap.m.StandardListItem({
						icon: "sap-icon://home",
						title: "{name}",
						description: "{state}"
					})
				});

			}
			this.oPopupCities.open();
			this.oPopupCities.attachConfirm(this.onConfirm, this);
		},
		onSettings: function () {
			if (!this.oPopupSupplier) {
				this.oPopupSupplier = new sap.ui.xmlfragment("Root.webapp.fragments.popup");
				this.getView().addDependent(this.oPopupSupplier);
				this.oPopupSupplier.bindAggregation("items", {
					path: "/supplier",
					template: new sap.m.DisplayListItem({
						value: "{city}",
						label: "{name}"
					})
				});
			}
			this.oPopupSupplier.open();
			/*			msgBox.confirm("This Page is under construction...");*/
		},
		onSelect: function (oEvent) {
			var oCC = oEvent.getSource();
			var items = oCC.getSelectedItems();

			debugger;
			if (items.length > 1) {
				oCC.setValueState(sap.ui.core.ValueState.Error);
				oCC.setValueStateText("Give only two items");
			} else {
				/*		 	oCC.setValueState(sap.ui.core.valueState.None);*/
			}
		},
		onInit: function () {
			debugger;
			var oModel = models.createFruitModel();
			this.getView().setModel(oModel);

			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.fid, this);
			/*sap.ui.getCore().setModel(oModel);*/
		},
		fid: function (oEvent) {
			debugger;
			var findex = oEvent.getParameter("arguments").fid;
			var spath = "/fruits/" + findex;
			this.getView().bindElement(spath);
		},

	/*	onNext: function () {
			debugger;
			var oAppCont = this.getView().getParent();
			oAppCont.to("idV3");
		},*/

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf webapp.view.view2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf webapp.view.view2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf webapp.view.view2
		 */
		//	onExit: function() {
		//
		//	}

	});

});