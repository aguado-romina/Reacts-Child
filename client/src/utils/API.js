import axios from "axios";
import puppy from "../puppies.json"

export default {

  getRandomProfile: function() {
    return axios.get(puppy);
  },

  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  
  getProfile: function(id, updateObject) {
    console.log("ID PASSED IN ", id, updateObject);
    return axios.get("/api/profiles/" + id, updateObject);

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