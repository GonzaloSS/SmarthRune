module.exports = (sequelize, Sequelize) => {
    const level = sequelize.define("level", {
        level:{
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        minExp: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        maxExp: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
});
    return level;
};