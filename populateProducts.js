var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("hackathondb");
	dbo.collection("shopmetadata").find({}).toArray(function(err, restaurantmetadata) {
		if (err) throw err;

		restaurantmetadata.forEach(function(restaurant){
			switch(restaurant.shopName) {
			case "McDonalds":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Big Mac", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Cheeseburger", price:4.00},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Double Cheeseburger", price:5.00},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Grilled Artisan Chicken", price:5.25},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Egg McMuffin", price:3.50} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Starbucks":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Caffe Americano", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Caffe Latte", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Caffe Mocha", price:3.75},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Cappuccino", price:3.75},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Caramel Macchiato", price:4.00} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Subway":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Black Forest Ham", price:6.50},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Veggie Delight", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Cold Cut Combo", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Meatball Marinara", price:6.50},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Roast Beef", price:4.50} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Taco Bell":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Crunchy Taco", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Soft Taco", price:4.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Chicken Soft Taco", price:6.50},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Bean Burrito", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Combo Burrito", price:6.50} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Burger King":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Chicken Garden Salad", price:4.50},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Sourdough King", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Whopper Sandwich", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Quarter Pound King", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Double Whopper Sandwich", price:7.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Wendys":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Dave's Single", price: 4.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Dave's Double", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Dave's Triple", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Baconator", price:4.50},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Son of Baconator", price:3.50} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Dunkin Donuts":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Coffee", price:2.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Americano", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Latte", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Macchiato", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Tea", price:2.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Chick-fil-A":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Chicken Sandwich", price:3.45},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Deluxe Sandwich", price:4.05},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Spicy Chicken Sandwich", price:3.69},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Spicy Deluxe Sandwich", price:4.29},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Grilled Chicken Sandwich", price:4.75} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Pizza Hut":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Hand-Tossed Cheese Pizza", price:8.49},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Veggie Lover's Pizza (Hand-Tossed)", price:12.49},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Supreme Pizza (Pan Pizza)", price:4.79},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Hawaiian Luau (Hand-Tossed)", price:15.79},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"BBQ Bacon Cheeseburger", price:12.49} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Dominos":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Philly Cheese Steak", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Pacific Veggie", price:12.49},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Honululu Hawaiian", price:10.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Deluxe", price:11.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"MeatZZa", price:12.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Panera Bread":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Roasted Turkey & Avocado BLT - half sandwich", price:10.49},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Steak & Arugula Sandwich - half sandwich", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Bacon Turkey Bravo; Sandwich - whole sandwich", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Mediterranean Veggie Sandwich - half sandwich", price:10.49},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Classic Grilled Cheese - half sandwich", price:8.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Sonic Drive-In":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Buffalo Boneless Wings", price:4.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Asian Sweet Chili Boneless Wings", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Honey BBQ Boneless Wings", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Classic Crispy Chicken Sandwich", price:5.50},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Classic Grilled Chicken Sandwich", price:4.50} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "KFC":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"2 Pc. Chicken", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Colonel's Original", price:5.39},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"KFC Famous Bowls", price:6.19},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Doublicious Sandwich", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"2 Chicken Littles", price:5.19} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Olive Garden":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Pasta e Fagioli", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Grilled Vegetable & Cheese Piadina", price:12.49},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Fettuccine Alfredo Mini Pasta Bowl", price:8.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Eggplant Parmigiana Breadstick Sandwich", price:10.49},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Chicken & Cheese Piadina", price:8.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Chipotle":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Burrito", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Bowl", price:7.00},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Crisspy Corn Tacos", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Salad", price:7.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Soft Flour Tacos", price:6.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Juiceland":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Peachy Green", price:4.55},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Home Run", price:4.55},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Clementine", price:4.55},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Vegetable Kingdom", price:4.55},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Morning Sunshine", price:4.55} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Jamba Juice":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Cucumber Orange Cooler", price:4.66},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Orange Supreme", price:5.44},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Veggie Vitality", price:6.05},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Tropical Greens", price:3.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Citrus Kick", price:4.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Dairy Queen":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Cheese Grillburger", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Chicken Bacon Ranch", price:4.59},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Turkey BLT", price:5.44},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Crispy Chicken Sandwich", price:4.88},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Cheeseburger", price:4.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Chilis Grill & Bar":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Chips and Salsa", price:4.00},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Guacomole", price:4.00},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Smoked Wings", price:5.00},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Southwestern Eggrolls", price:5.00},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"White Spinach Queso", price:4.00} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "IHOP":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"The Classic", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Big Brunch", price:8.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Cowboy BBQ", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Strawberry n cream pancake combo", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"international pancake combo", price:9.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Papa Johns Pizza":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Double Bacon 6 Cheese (Original)", price:12.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Double Bacon 6 Cheese (Thin)", price:12.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"John's Favorite (Original)", price:12.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Pineapple Jalapeno", price:12.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Cheese (Original)", price:6.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Jack in the Box":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Sourdough Jack – Combo", price:5.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Ultimate Cheeseburger	", price:4.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Ultimate Cheeseburger – Combo	", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Bacon Ultimate Cheeseburger	", price:5.50},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Jumbo Jack Cheeseburger	", price:3.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Inn-n-Out":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Double Double", price:4.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Cheeseburger", price:4.99},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Hamburger", price:3.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Fries", price:3.50},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Chocolate Shake", price:3.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "PTerrys":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Hamburger", price:2.35},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Cheeseburger", price:2.60},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Chicken Burger", price:3.95},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Veggie Burger", price:3.95},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Double with Cheese", price:3.95} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			case "Dennys":
				var productdata = [ {shopNameId:restaurant.shopNameId, productId:1, productName:"Blaster Fire Burger", price:6.99},
									{shopNameId:restaurant.shopNameId, productId:2, productName:"Build Your Own Grand Slam", price:7.95},
									{shopNameId:restaurant.shopNameId, productId:3, productName:"Dulce de Leche Crunch Pancake Breakfast", price:8.99},
									{shopNameId:restaurant.shopNameId, productId:4, productName:"Lumberjack Slam", price:9.99},
									{shopNameId:restaurant.shopNameId, productId:5, productName:"Belgian Waffle Slam", price:9.99} ]
				for(var i=0; i<productdata.length; i++){
					dbo.collection("productservices").insertOne(productdata[i], function(err, res) {
						    if (err) throw err;
						    console.log("document inserted for " + restaurant.shopName);
						});
				}
				break;
			}
		});
	});
});
