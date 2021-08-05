import http from "../http-common";

class ProduceDataService {
    getAll(page = 0) {
        return http.get(`produce`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`produce?${by}=${query}`);
    } 

}

export default new ProduceDataService();