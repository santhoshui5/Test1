sap.ui.define(["sap/ui/model/json/JSONModel"],
	function (JSONModel) {
		return {
			createFruitModel: function () {
				debugger;
				var oModel = new JSONModel();
				oModel.loadData("webapp/model/mockData/fruits.json");
/*				oModel.setData({
					"fruits": [{
							"name": "banana",
							"type": "rich in vitamins and minerals",
							"healthbenefit": "improve blood sugar control and digestive health",
							"color": "yellow",
							"price": 10.00,
							"currency": "INR",
							"image": "https://www.bing.com/images/search?view=detailV2&ccid=qo1nT%2fg5&id=27FD04ED73E7E6172AF5C59D5281BA8CCA0214BE&thid=OIP.qo1nT_g5FudSMMVP0R59WwHaGP&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fz%2fbanana-bunch-18029532.jpg&exph=1095&expw=1300&q=banana&simid=607995629883033771&selectedIndex=6",
							"status": "Availabe",
							"hours": 1,
							"suppliedBy": "Dmart store"
						}, {
							"name": "Grape fruit",
							"type": "ability to aid weight loss and reduce insulin resistance.",
							"healthbenefit": "fresh grapefruit before meals lost 2.9 pounds (1.3 kg) more weight than those who didn’t",
							"color": "Black",
							"price": 40.00,
							"currency": "INR",
							"image": "https://www.bing.com/images/search?view=detailV2&ccid=5x%2bFeCxY&id=BB31B23C263D090DE4FD4D1CA378686C1F99654B&thid=OIP.5x-FeCxYjGK7rfov9AdXngHaFh&mediaurl=http%3a%2f%2fmedliciousfoods.com%2fwp-content%2fuploads%2f2014%2f06%2fgrapes-purple.jpg&exph=896&expw=1200&q=grapes&simid=608003571250563212&selectedIndex=2",
							"status": "Availabe",
							"hours": 2,
							"suppliedBy": "Dmart store"
						}

					]
				});*/
				return oModel;
			}
		};
	}
);