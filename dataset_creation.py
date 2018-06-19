from pymongo import MongoClient
import math, random

def database_connection():
	#Mongo Client
	client = MongoClient()
	client = MongoClient('localhost', 27017)
	#client = MongoClient('mongodb://localhost:27017')
	db = client['hackathondb']
	return db

def truncate(point):
	return math.floor(float(point) * 10 ** 4)/10**4


def new_points_subtract(point):
	new_point = float(point) - 0.0001
	new_point = math.floor(float(new_point) * 10 ** 4)/10**4
	return new_point

def geo_location_list(geo_location):
	isLatitude = False
	isLongitude = False
	latitude_list = []
	longitude_list = []
	latitude = geo_location["lat"]
	longitude = geo_location["lng"]
	latitude_list.append(truncate(latitude))
	longitude_list.append(truncate(longitude))
	if not isLatitude:
		latitude_list.append(new_points(latitude))
		longitude_list.append(truncate(longitude))
		isLatitude = True
	if not isLongitude:
		latitude_list.append(truncate(latitude))
		longitude_list.append(new_points(longitude))
		isLongitude = True
	if isLongitude and isLatitude:
		latitude_list.append(new_points(latitude))
		longitude_list.append(new_points(longitude))

	new_geo_location = {
		"latitude" : latitude_list,
		"longitude" : longitude_list
	}

	return new_geo_location

def chooseRandomTime():
	return random.randint(1, 24)

def chooseRandomDay():
	return random.randint(1, 7)

def chooseRandomProductIdBasedOnShopNameId(database, shop_name_id):
	#product_id_result = database.productservices.find({"shopNameId": shop_name_id}, {"productId": 1})
	return random.randint(1, 5)

def main():
	db = database_connection()
	count = 0
	result_set = db.shopservices.find({}, {"shopGeolocation":1, "shopNameId": 1})
	for r in result_set:
		new_geo_location_list = geo_location_list(r["shopGeolocation"])
		for i in range(0, len(new_geo_location_list["latitude"])):
			user_lat = new_geo_location_list["latitude"][i]
			user_lng = new_geo_location_list["longitude"][i]
			shop_lat = truncate(r["shopGeolocation"]["lat"])
			shop_lng = truncate(r["shopGeolocation"]["lng"])
			time = chooseRandomTime()
			shop_name_id = r["shopNameId"]
			day = chooseRandomDay()
			product_id = chooseRandomProductIdBasedOnShopNameId(db, shop_name_id)
			count = count + 1

			dataset_services = {
			"userLatitude": user_lat,
			"userLongitude": user_lng,
			"shopLatitude" : shop_lat,
			"shopLongitude" : shop_lng,
			"time" : time,
			"shopNameId" : shop_name_id,
			"day" : day,
			"productId" : product_id
			}

			db.datasetservices.insert(dataset_services)

	print("Count: " + str(count))



if __name__ == '__main__':
	main()