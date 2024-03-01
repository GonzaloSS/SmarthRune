module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        isAdmin:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
});
    return user;
};