module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      gamertag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      platform: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      topgame: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Post;
  };
  