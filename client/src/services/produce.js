import http from "../http-common";

class ProduceDataService {

    find(query) {
        let seasonBin = (query.spring ? 1000 : 0) + (query.summer ? 100 : 0) + (query.fall ? 10 : 0) + (query.winter ? 1 : 0);
        let nameStr = query.name ? `name=${query['name']}` : ``;
        let seasonStr = seasonBin !== 0 ? `season=${seasonBin}` : ``;
        return http.get(`produce${nameStr || seasonStr ? "?" : ``}${nameStr}${nameStr && seasonStr ? "&" : ``}${seasonStr}`);
    } 

}

export default new ProduceDataService();