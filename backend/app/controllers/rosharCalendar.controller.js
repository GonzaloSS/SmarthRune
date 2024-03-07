const db = require("../models");
const RosharCalendar = db.rosharCalendar;
const Op = db.Sequelize.Op;
const rosharCalendarService = require("../services/rosharCalendar.service");
exports.create = (req, res) => {
    const newRosharCalendar = ({
        day: req.body.day,
        month: req.body.month,
        weather: req.body.weather,
        place: req.body.place,
        isEnabled: req.body.isEnabled
    });

    rosharCalendarService.disabledEvent();
    RosharCalendar.create(newRosharCalendar)
      .then(data => {
            res.send(data);
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the RosharCalendar."
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    RosharCalendar.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "RosharCalendar was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update RosharCalendar with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating RosharCalendar with id=" + id
        });
      });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    RosharCalendar.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "RosharCalendar was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete RosharCalendar with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete RosharCalendar with id=" + id
        });
      });
}

exports.getOne = (req, res) => {
    let id = req.params.id;
    RosharCalendar.findByPk(id)
      .then(data => {
        if (!data) {
          res.status(400).send({
            message:
              "No RosharCalendar found with that id"
          })
        }
        res.send(data);
        return;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving RosharCalendar with id"
        });
        return;
      });

}

exports.getAll = (req, res) => {
    RosharCalendar.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving RosharCalendar."
      });
    });
}


exports.findEnabled = async (req, res) => {
   res.send(await rosharCalendarService.findEnabled());
}