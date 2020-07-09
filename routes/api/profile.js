const router = require("express").Router();
const profilecontroller = require("../../controllers/profilecontroller");

// Matches with "/api/profile"
router.route("/")
  .get(profilecontroller.findAll)
  .post(profilecontroller.create);

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(profilecontroller.findById)
  .put(profilecontroller.update)
  .delete(profilecontroller.delete);

module.exports = router;