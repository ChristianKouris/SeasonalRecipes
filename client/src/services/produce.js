import http from "../http-common";

class ProduceDataService {
    getAll() {
        return http.get(`produce`);
    }

    find(query) {
        let seasonBin = (query.spring ? 1000 : 0) + (query.summer ? 100 : 0) + (query.fall ? 10 : 0) + (query.winter ? 1 : 0);
        return http.get(`produce?name=${query['name']}&season=${seasonBin}`);
    } 

}

export default new ProduceDataService();