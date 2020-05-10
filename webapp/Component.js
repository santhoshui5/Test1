sap.ui.define(["sap/ui/core/UIComponent"],
	function (UIComp) {
		return UIComp.extend("Root.webapp.Component", {
			metadata:{
				"manifest":"json"
			},
			init: function () {
				//Initialize code like initialization of router
				//Calling the base class methods
				sap.ui.core.UIComponent.prototype.init.apply(this);
				this.getRouter().initialize();
			},
	/*		createContent: function () {
				//Here we create content needs to be displayed to User
				var oView = new sap.ui.view("idApp", {
					type: sap.ui.core.mvc.ViewType.XML,
					viewName: "Root.webapp.view.SplitApp"

				});
				return oView;
			},*/
			destroy: function () {
				// Clean up the code
				sap.ui.core.UIComponent.prototype.destroy.apply(this);

			}

		});
	});