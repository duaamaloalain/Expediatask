var request = require('request');
var path = require('path');

module.exports = function (app, express) {
	app.get('/api/expedia',function(req,res) { //get data from API
		request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function(error, response, body) {
			var Data=JSON.parse(body); //to put all the data insid Data
			if(error){
				throw error;
			}else {		
				res.json(Data); //response the json obj
			}
		});
	});    
}