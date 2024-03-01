module.exports = (sequelize, Sequelize) => {
    const character = sequelize.define("bisum", {
        pjSender: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pjReceiver: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        typeOfCoin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amount: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return character;
};