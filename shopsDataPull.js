const https = require('https');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var restaurants = ["McDonalds", "Starbucks", "Subway", "Taco Bell", "Burger King", "Wendys", "Dunkin Donuts", "Chick-fil-A", "Pizza Hut", "Dominos", "Panera Bread", "Sonic Drive-In", "KFC", "Olive Garden", "Chipotle", "Juiceland", "Jamba Juice", "Dairy Queen", "Chilis Grill & Bar", "IHOP", "Papa Johns Pizza", "Jack in the Box", "Inn-n-Out", "PTerrys", "Dennys"];

//var restaurants = ["McDonalds"];
var API_KEY = "AIzaSyDkJrv4T3D-cqD9wrxi1VPhzlZZMRQkDmw"; 

restaurants.forEach(function(restaurant){

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("hackathondb");
		var query = { shopName: restaurant };
		dbo.collection("shopmetadata").find(query).toArray(function(err, restaurantmetadata) {
			if (err) throw err;

			https.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+restaurant+'&region=us&key='+API_KEY, (resp) => {
				  let data = '';

				  // A chunk of data has been recieved.
				  resp.on('data', (chunk) => {
				    data += chunk;
				  });

				  // The whole response has been received. Print out the result.
				  resp.on('end', () => {
					var result = JSON.parse(data);
					for(var i=0; i<10; i++){
						var formatted = {
							'shopName' : restaurantmetadata[0].shopName,
							'shopAddress': result.results[i].formatted_address,
							'shopGeolocation': result.results[i].geometry.location,
							'shopNameId':restaurantmetadata[0].shopNameId,
							'shopId':restaurantmetadata[0].shopId[i]
						}

						dbo.collection("shopservices").insertOne(formatted, function(err, res) {
						    if (err) throw err;
						    console.log("1 document inserted");
						});
					}
				  });

			}).on("error", (err) => {
			  console.log("Error: " + err.message);
			});    
		});
	});
})