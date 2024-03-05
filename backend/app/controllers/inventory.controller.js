const db = require("../models");
const Inventory = db.inventory;
const Character = db.character;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const newInventory = ({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        weight: req.body.weight,
        pjId: req.body.pjId
    });

    Inventory.create(newInventory)
      .then(data => {
            res.send(data);
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Inventory."
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Inventory.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Inventory was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Inventory with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Inventory with id=" + id
        });
      });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Inventory.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Inventory was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Inventory with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Inventory with id=" + id
        });
      });
}

exports.getOne = (req, res) => {
    let id = req.params.id;
    Inventory.findByPk(id, {
        include: [{
            model: Character,
            as: 'character'
          }]
    })
      .then(data => {
        if (!data) {
          res.status(400).send({
            message:
              "No Inventory found with that id"
          })
        }
        res.send(data);
        return;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Inventory with id"
        });
        return;
      });

}

exports.getAll = (req, res) => {
    Inventory.findAll({
        include: [{
            model: Character,
            as: 'character'
          }]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Inventory."
      });
    });
}