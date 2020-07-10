module.exports = (sequelize, DataTypes) => {

    const Profile = sequelize.define('Profile', {

    email: {
        type: DataTypes.STRING
            },    
    gamertag: {
      type: DataTypes.STRING
      },
    console: {
      type: DataTypes.STRING
      },
    bio: {
        type: DataTypes.STRING
      },
    topgame: {
      type: DataTypes.STRING
      },
    style: {
      type: DataTypes.STRING
      },

      
    },{});
    
    return Profile;
    
  }