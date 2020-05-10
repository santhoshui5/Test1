sap.ui.define(["sap/m/Button"],
	function (Button) {
		return Button.extend("AmazingButton", {
			metadata: {
				events: {
					"hover": {}
				}
			},
			onmouseover:function(){
				this.fireHover();
			},
			renderer: {}

		});
	});