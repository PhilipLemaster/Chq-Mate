const db = require('../models');
const Profile = db.profile;
 
// Post a Profile
exports.create = (req, res) => {  
  // Save to MySQL database
  Profile.create({ 
    email: req.body.email,
    password: req.body.password,   
    gamertag: req.body.gamertag,
    platform: req.body.platform,
    bio: req.body.bio,
    topgame: req.body.topgame
  }).then(profile => {    
    // Send created profile to client
    res.send(profile);
  });
};
 
// FETCH all profiles
exports.findAll = (req, res) => {
  Profile.findAll().then(profiles => {
    // Send all profiles to Client
    res.send(profiles);
  });
};
 
// Find a Profile by Id
exports.findById = (req, res) => {  
  Profile.findById(req.params.profileId).then(profile => {
    res.send(profile);
  })
};
 
// Update a Profile
exports.update = (req, res) => {
  const id = req.params.profileId;
  Profile.update( { email: req.body.email, password: req.body.password, gamertag: req.body.gamertag, platform: req.body.platform, bio: req.body.bio, topgame: req.body.topgame }, 
           { where: {id: req.params.profileId} }
           ).then(() => {
           res.status(200).send("updated successfully a profile with id = " + id);
           });
};
 
// Delete a Profile by Id
exports.delete = (req, res) => {
  const id = req.params.profileId;
  Profile.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a profile with id = ' + id);
  });
};