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


# def new_points_subtract(point):
# 	new_point = float(point) - 0.0001
# 	new_point = math.floor(float(new_point) * 10 ** 4)/10**4
# 	return new_point

def calculate_points_subtract(point):
	temp_list = []
	new_point_one = math.floor((float(point) - 0.0001) * 10 ** 4)/10**4
	new_point_two = math.floor((float(point) - 0.0002) * 10 ** 4)/10**4
	new_point_three = math.floor((float(point) - 0.0003) * 10 ** 4)/10**4
	new_point_four = math.floor((float(point) - 0.0004) * 10 ** 4)/10**4
	temp_list.append(new_point_one)
	temp_list.append(new_point_two)
	temp_list.append(new_point_three)
	temp_list.append(new_point_four)

	return temp_list

def calculate_points_addition(point):
	temp_list = []
	new_point_one = math.floor((float(point) + 0.0001) * 10 ** 4)/10**4
	new_point_two = math.floor((float(point) + 0.0002) * 10 ** 4)/10**4
	new_point_three = math.floor((float(point) + 0.0003) * 10 ** 4)/10**4
	new_point_four = math.floor((float(point) + 0.0004) * 10 ** 4)/10**4
	temp_list.append(new_point_one)
	temp_list.append(new_point_two)
	temp_list.append(new_point_three)
	temp_list.append(new_point_four)

	return temp_list

def new_points(point):

	new_list = []

	for sub in calculate_points_subtract(point):
		new_list.append(sub)

	for add in calculate_points_addition(point):
			new_list.append(add)

	return new_list


def geo_location_list(geo_location):

	latitude_list = []
	longitude_list = []

	latitude_list = new_points(geo_location['lat'])
	longitude_list = new_points(geo_location['lng'])

	return latitude_list, longitude_list

def choose_random_time():
	return random.randint(1, 24)

def choose_random_day():
	return random.randint(1, 7)

#def choose_random_product_id_based_on_shop_name_id(database, shop_name_id):
def choose_random_product_id_based_on_shop_name_id():
	# product_id_result = database.productservices.find({"shopNameId": shop_name_id}, {"productId": 1})
	return random.randint(1, 5)


def main():
	db = database_connection()
	count = 0
	db.datasetservices.drop()
	result_set = db.shopservices.find({}, {"shopGeolocation":1, "shopNameId": 1})
	for r in result_set:
		latitude_list, longitude_list = geo_location_list(r["shopGeolocation"])
		for latitude in latitude_list:
			for longitude in longitude_list:

				dataset_services = {} 
				user_lat = latitude
				user_lng = longitude
				shop_lat = truncate(r["shopGeolocation"]["lat"])
				shop_lng = truncate(r["shopGeolocation"]["lng"])


				dataset_services = {
				"userLatitude": user_lat,
				"userLongitude": user_lng,
				"shopLatitude" : shop_lat,
				"shopLongitude" : shop_lng,
				"time" : choose_random_time(),
				"shopNameId" : r['shopNameId'],
				"day" : choose_random_day(),
				"productId" : choose_random_product_id_based_on_shop_name_id()
				}

				db.datasetservices.insert(dataset_services)
				count = count + 1

				# for i in range(0, len(new_geo_location_list["latitude"])):
		# 	user_lat = new_geo_location_list["latitude"][i]
		# 	user_lng = new_geo_location_list["longitude"][i]
		# 	shop_lat = truncate(r["shopGeolocation"]["lat"])
		# 	shop_lng = truncate(r["shopGeolocation"]["lng"])
		# 	time = chooseRandomTime()
		# 	shop_name_id = r["shopNameId"]
		# 	day = chooseRandomDay()
		# 	product_id = chooseRandomProductIdBasedOnShopNameId(db, shop_name_id)
		# 	count = count + 1


		#first take the values and then based on single latitude calculate the -0.0001, -0.0002, -0.0003, -0.0004 and +0.0001, +0.0002, +0.0003, +0.0004
		#first take the values and then based on single longitude calculate the -0.0001, -0.0002, -0.0003, -0.0004 and +0.0001, +0.0002, +0.0003, +0.0004
		#Randomly calculate the index values and match it with one shop location

	print("Count: " + str(count))



if __name__ == '__main__':
	main()