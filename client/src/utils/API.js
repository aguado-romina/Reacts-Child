import axios from "axios";

export default {

  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },

  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  
  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  
  updateProfiles: function(id, updateObject) {
    console.log("ID PASSED IN ", id, updateObject);
    return axios.put("/api/profiles/" + id, updateObject);

  },

  deleteProfiles: function(id) {
    return axios.delete("/api/profiles/" + id);
  },

  saveProfile: function(postData) {
    return axios.post("/api/profiles", postData);
  }
};