import axios from "axios";

export default {
  
  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  
  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  
  updateProfiles: function(id) {
    return axios.put("/api/profiles/" + id);
  },

  deleteProfiles: function(id) {
    return axios.delete("/api/profiles/" + id);
  },

  saveProfile: function(postData) {
    return axios.post("/api/profiles", postData);
  }
};