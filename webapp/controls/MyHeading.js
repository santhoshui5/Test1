sap.ui.define([],
	function () {
		return sap.ui.core.Control.extend("Root.webapp.controls.MyHeading", {
			metadata: {
				properties: {
					"arya": "",
					"color": "",
					"whitewalker": ""

				}
			},
			init: function () {
				this.setColor("blue");
			},

			renderer: function (oRm, oControl) {
				/*oRm.write('<h1 style="color: '+ oControl.getColor() + '">' + oControl.getArya() + '</h1>');*/
				oRm.write("<h1");
				oRm.addStyle("color", oControl.getColor());
				oRm.addStyle("border", oControl.getWhitewalker());
				oRm.writeStyles();
				oRm.write(">" + oControl.getArya() + "</h1>");
			}
		});
	});