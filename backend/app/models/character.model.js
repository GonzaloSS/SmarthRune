module.exports = (sequelize, Sequelize) => {
    const character = sequelize.define("character", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        frag: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        frost: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        broam: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        grandFrag: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        ruck: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        experience:{
            type: Sequelize.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true

        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
    });
    return character;
};