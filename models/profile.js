module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('profile', {
    // email: {
    //     type: Sequelize.STRING
    //         },    
    // password: {
    //     type: Sequelize.STRING
    //         },
    gamertag: {
      type: DataTypes.STRING
      },
    console: {
      type: DataTypes.STRING
      },
    bio: {
        type: DataTypes.INTEGER
      },
    topgame: {
      type: DataTypes.STRING
      }
    });
    
    return Profile;
  }