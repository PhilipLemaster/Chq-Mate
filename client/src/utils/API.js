import axios from "axios";

export default {
  // Gets books from the Google API
//   getBooks: function(q) {
//     return axios.get("/api/google", { params: { q: "title:" + q } });
//   },
  // Gets all saved books
  getSavedProfile: function() {
    return axios.get("/api/profile");
  },
  // Deletes the saved book with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves an book to the database
  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  }
};
