const db = require("../models");
const bisumService = require("../services/bisum.service");
const Bisum = db.bisum;
const Character = db.character;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
}

exports.getOne = (req, res) => {
    let id = req.params.id;
    Bisum.findByPk(id, {
        include: [{
            model: Character,
            as: 'sender'
            },
            {
            model: Character,
            as: 'receiver'
            }]
    })
      .then(data => {
        if (!data) {
          res.status(400).send({
            message:
              "No Bisum found with that id"
          })
        }
        res.send(data);
        return;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Bisum with id"
        });
        return;
      });

}

exports.getAll = (req, res) => {
    Bisum.findAll({
        include: [{
        model: Character,
        as: 'sender'
        },
        {
        model: Character,
        as: 'receiver'
        }]
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Bisum."
      });
    });
}


exports.sendMoney = async (req, res) => {
   const result = await bisumService.checkIfHaveMoney(req.body.typeOfCoin, req.body.amount, req.body.pjSender);
   if (result.haveMoney) {
    const isBisumDone = await bisumService.sendMoney(req.body.typeOfCoin, req.body.amount, result.senderAmount, req.body.pjSender, req.body.pjReceiver);
    
    if (isBisumDone) {
        const createBisumHistory = await bisumService.createBisum(req.body.typeOfCoin, req.body.amount, req.body.pjSender, req.body.pjReceiver, req.body.description);
        res.send(createBisumHistory);
    }
   } else {
    res.send(result.haveMoney);
   }

}