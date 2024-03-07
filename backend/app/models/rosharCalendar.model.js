module.exports = (sequelize, Sequelize) => {
    const rosharCalendar = sequelize.define("rosharCalendar", {
        day:{
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        month: {
            type: Sequelize.STRING,
            allowNull: false
        },
        weather: {
            type: Sequelize.STRING,
            allowNull: false
        },
        place: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isEnabled: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
});
    return rosharCalendar;
};