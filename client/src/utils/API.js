import axios from "axios";

export default {

// Saves an profile to the database
  saveProfile: function(profileData) {
    return axios.post("/api", profileData);
  },
  // Gets all saved profiles
  getSavedProfile: function() {
    return axios.get("/api");
  },
  // Saves an profile to the database
  updateProfile: function(profileData) {
    return axios.put("/api", profileData);
  },
  // Deletes the saved profile with the given id
  deleteProfile: function(id) {
    return axios.delete("/api" + id);
  },
  
};
