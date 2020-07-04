module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define('profile', {
    email: {
        type: Sequelize.STRING
            },    
    password: {
        type: Sequelize.STRING
            },
    gamertag: {
      type: Sequelize.STRING
      },
      platform: {
      type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.INTEGER
      },
      topgame: {
      type: Sequelize.STRING
      }
    });
    
    return Profile;
  }