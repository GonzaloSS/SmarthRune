const db = require("../models");
const Character = db.character;
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const newCharacter = ({
       name: req.body.name,
       frag: req.body.frag || null,
       frost: req.body.frost || null,
       broam: req.body.broam || null,
       grandfrag: req.body.grandfrag || null,
       ruck: req.body.ruck || null,
       level: req.body.level ,
       userId: req.body.userId || null,
       experience: req.body.experience
    });

    Character.create(newCharacter)
      .then(data => {
            res.send(data);
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Character."
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Character.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Character was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Character with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Character with id=" + id
        });
      });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Character.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Character was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Character with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Character with id=" + id
        });
      });
}

exports.getOne = (req, res) => {
    let id = req.params.id;
    Character.findByPk(id, {
        include: [{
            model: User
          }]
    })
      .then(data => {
        if (!data) {
          res.status(400).send({
            message:
              "No Character found with that id"
          })
        }
        res.send(data);
        return;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Character with id"
        });
        return;
      });

}

exports.getAll = (req, res) => {
    Character.findAll({
        include: [{
            model: User
          }]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Character."
      });
    });
}