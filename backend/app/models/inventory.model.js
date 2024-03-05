module.exports = (sequelize, Sequelize) => {
    const inventory = sequelize.define("inventory", {
        pjId: {
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
        quantity: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        weight: {
            type: Sequelize.FLOAT,
            allowNull: false,
        }
    });
    return inventory;
}