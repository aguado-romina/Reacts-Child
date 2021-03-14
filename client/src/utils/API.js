import axios from "axios";

export default {
  
  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  
  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  
  deleteProfiles: function(id) {
    return axios.delete("/api/profiles/" + id);
  },

  saveProfiles: function(postData) {
    return axios.post("/api/profiles", postData);
  }
};