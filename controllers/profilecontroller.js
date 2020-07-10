const db = require('../models');
const Profile = db.Profile;
 
// Post a Profile
exports.create = (req, res) => {  
  // Save to MySQL database
  Profile.create({ 
    email: req.body.email,
    password: req.body.password,   
    gamertag: req.body.gamertag,
    console: req.body.console,
    bio: req.body.bio,
    topgame: req.body.topgame,
    style: req.body.style
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
  Profile.findById(req.params.id).then(profile => {
    res.send(profile);
  })
};
 
// Update a Profile
exports.update = (req, res) => {
  const id = req.params.id;
  Profile.update( { email: req.body.email, password: req.body.password, gamertag: req.body.gamertag, console: req.body.console, bio: req.body.bio, topgame: req.body.topgame }, 
           { where: {id: req.params.id} }
           ).then(() => {
           res.status(200).send("updated successfully a profile with id = " + id);
           });
};
 
// Delete a Profile by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  Profile.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a profile with id = ' + id);
  });
};