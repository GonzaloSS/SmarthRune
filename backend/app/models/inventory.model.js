module.exports = (sequelize, Sequelize) => {
    const inventory = sequelize.define("inventory", {
        pjID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        quiantity: {
            type: Sequelize.FLOAT,
            allowNull: false,
        }
    });
    return inventory;
}