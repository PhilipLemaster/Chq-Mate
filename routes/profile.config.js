module.exports = function(app) {
 
    const profiles = require('../controller/profilecontroller.js');
 
    // Create a new Customer
    app.post('/api/profile', profile.create);
 
    // Retrieve all Customer
    app.get('/api/profiles', profile.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/profiles/:profileId', profile.findById);
 
    // Update a Customer with Id
    app.put('/api/profiles/:profileId', profile.update);
 
    // Delete a Customer with Id
    app.delete('/api/profiles/:profileId', profile.delete);
}