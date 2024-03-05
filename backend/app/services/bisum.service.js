const db = require("../models");
const Bisum = db.bisum;
const Character = db.character;

exports.checkIfHaveMoney = async function checkIfHaveMoney(typeOfCoin, amount, id) {
   try {
     var result = false;
     const amountCharacter = await Character.findOne({
        attributes: [typeOfCoin],
        raw: true,
        where: {
            id: id,
        }
     })
    
     if (amountCharacter[typeOfCoin] >= amount) {
        result = true;
     }

     return {senderAmount: amountCharacter[typeOfCoin], haveMoney: result};
   } catch (err) {
    throw new Error(err.message);
   }
}


exports.sendMoney = async function sendMoney(typeOfCoin, amount, senderAmount, pjSender, pjReceiver) {

   const updatedSender = await Character.update(
    {
        [typeOfCoin] : senderAmount - amount
    }, {
      where: { id: pjSender }
    });

    const amountCharacter = await Character.findOne({
        attributes: [typeOfCoin],
        raw: true,
        where: {
            id: pjReceiver,
        }
     })


    const updatedReceiver = await Character.update(
    {
        [typeOfCoin] : amountCharacter[typeOfCoin] + amount
    }, {
      where: { id: pjReceiver }
    });
    if (updatedReceiver[0] === 1 && updatedReceiver[0] === 1) {
        return true;
    } else {
        return false;
    }
}

exports.createBisum = async function createBisum(typeOfCoin, amount, pjSender, pjReceiver, description) {
    const newBisum = ({
        pjSender: pjSender,
        pjReceiver: pjReceiver,
        amount: amount,
        typeOfCoin: typeOfCoin,
        description: description
     });
 
     const isCreated = await Bisum.create(newBisum);
     if (isCreated){
        return true;
     } else { 
        return false;
     }

}