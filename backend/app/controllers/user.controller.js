const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body.isAdmin)
 if (!req.body.address && !req.body.isAdmin) {
    res.status(400).send({
      message: "Please provide an address and an isAdmin"
    });
    return;
 }

    const newUser = ({
        email: req.body.address,
        isAdmin: req.body.isAdmin
    });

    User.create(newUser)
      .then(data => {
            res.send(data);
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
}

exports.getOne = (req, res) => {
    let id = req.params.id;
    User.findByPk(id)
      .then(data => {
        if (!data) {
          res.status(400).send({
            message:
              "No User found with that id"
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
            err.message || "Some error occurred while retrieving User with id"
        });
        return;
      });

}

exports.getAll = (req, res) => {
    User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
}