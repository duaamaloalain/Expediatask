var request = require('request');
var path = require('path');

var obj={};
module.exports = function (app, express) {
	app.get('/api/expedia',function(req,res) { //get data from API
		request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function(error, response, body) {
			var Data=JSON.parse(body); // to put all the data insid Data
			if(error){
				throw error;
			}else {		
				for(var key in Data){ 
					if(obj[key]===undefined){
						obj[key]=Data[key];
					}    
				}
				res.json(obj);//response the json obj
			}
		});
	});    
}