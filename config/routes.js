var request = require('request');
var path = require('path');

var obj={};
module.exports = function (app, express) {
	app.get('/api/expedia',function(req,res) {
		request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function(error, response, body) {
			var Data=JSON.parse(body);
			if(error){
				throw error;
			}else {		
				for(var key in Data){ 
					if(obj[key]===undefined){
						obj[key]=Data[key];
					}    
				}
				res.json(obj);
			}
		});
	});    
}