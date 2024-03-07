const db = require("../models");
const RosharCalendar = db.rosharCalendar;
exports.disabledEvent = async function() {
    const id = await RosharCalendar.findAll({
        where: {
            isEnabled: true
        },
        raw: true
    })
    console.log()
    if (id.length != 0) {
        await RosharCalendar.update({isEnabled: false},{
           where: { id: id[0].id },
        })
    }
}


exports.findEnabled = async function() {
    const id = await RosharCalendar.findAll({
        where: {
            isEnabled: true
        },
        raw: true
    })

    return id;
}
