import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/shopify-777ae/us-central1/api",
  //the api url(cloud function)
  //if you have blaze account "firebase deploy --only function "
  //firebase deploy --only hosting
});

export default instance;
