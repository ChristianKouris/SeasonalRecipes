import axios from "axios";

export default axios.create({
    baseURL: "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/seasonal-recipes-opged/service/fruits/incoming_webhook/",
    headers: {
        "Content-type": "application/json"
    }
});