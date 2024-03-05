const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.level = require("./level.model.js")(sequelize, Sequelize);
db.character = require("./character.model.js")(sequelize, Sequelize);

// ASSOCIATIONS

db.user.hasMany(db.character, { as: "characterId" }, 
  { onDelete: "cascade", onUpdate: "cascade", allowNull: true });
  
db.character.belongsTo(db.user, {
  foreignKey: "userId",
  allowNull: true,
  as: "user",
 
});
module.exports = db;