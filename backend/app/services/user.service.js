const db = require("../models");
const Character = db.character;
const User = db.user;
exports.retrieveNameAndIdOfCharacter = async function(id) {
    const characters = await Character.findAll({
        where: {
            userId: id
        },
        raw: true
    })

    return characters
}


exports.retrieveUserId = async function(email) {
    const userId = await User.findAll({
        attributes: ["id"],
        where: {
            email: email
        },
        raw: true
    })
    return userId[0].id;
}

exports.isAdmin = async function(email) {
    const isAdmin = await User.findAll({
        attributes: ["isAdmin", "id"],
        where: {
            email: email
        },
        raw: true
    })
    return isAdmin
}