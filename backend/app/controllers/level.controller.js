const db = require("../models");
const Level = db.level;
const Op = db.Sequelize.Op;
const levelService = require("../services/level.service");

exports.create = (req, res) => {

    const newLevel = ({
        level: req.body.level,
        minExp: req.body.minExp,
        maxExp: req.body.maxExp
    });

    Level.create(newLevel)
      .then(data => {
            res.send(data);
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Level."
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Level.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Level was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Level with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Level with id=" + id
        });
      });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Level.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Level was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Level with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Level with id=" + id
        });
      });
}

exports.getOne = (req, res) => {
    let id = req.params.id;
    Level.findByPk(id)
      .then(data => {
        if (!data) {
          res.status(400).send({
            message:
              "No Level found with that id"
          })
        }
        res.send(data);
        return;
      })
      .catch(err => {
        console.log(err.message);
        console.log("hola");
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Level with id"
        });
        return;
      });

}

exports.getAll = (req, res) => {
    Level.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Level."
      });
    });
}

exports.getLevel = async (req, res) => {
  res.send(await levelService.retrieveLevel(req.params.level));
}