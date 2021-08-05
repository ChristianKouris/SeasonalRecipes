import http from "../http-common";

class RestaurantDataService {
    getAll(page = 0) {
        return http.get(`fruit`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`fruit?${by}=${query}`);
    } 

    getCuisines(id) {
        return http.get(`/cuisines`);
    }

}

export default new RestaurantDataService();