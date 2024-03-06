const db = require("../models");
const Level = db.level;
exports.retrieveLevel = async function(levelNumber) {
    const level = await Level.findAll({
        where: {
            level: levelNumber
        },
        raw: true
    })
    return level
}
