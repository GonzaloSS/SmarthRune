const conversionController = require("../controllers/conversion.controller");
const userController = require("../controllers/user.controller");
const levelController = require("../controllers/level.controller");
const characterController = require("../controllers/character.controller");
const bisumController = require("../controllers/bisum.controller");
const inventoryController = require("../controllers/inventory.controller");
const rosharCalendarController = require("../controllers/rosharCalendar.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    //ROUTES ADDRESS
  
    // CONVERSION ROUTE
    app.get("/api/conversion", conversionController.convert);
  
    // USER ROUTES

    app.post("/api/createUser", userController.create);

    app.get("/api/user", userController.getAll);

    app.get("/api/user/:id", userController.getOne);

    app.put("/api/updateUser/:id", userController.update);

    app.delete("/api/deleteUser/:id", userController.delete);

    app.get("/api/getUserCharacters/:email", userController.getAllCharactersByUser);

    app.get("/api/isAdmin/:email", userController.isAdmin);


    // LEVEL ROUTES

    app.post("/api/createLevel", levelController.create);

    app.get("/api/level", levelController.getAll);

    app.get("/api/level/:id", levelController.getOne);

    app.put("/api/updateLevel/:id", levelController.update);

    app.delete("/api/deleteLevel/:id", levelController.delete);

    app.get("/api/getLevelInfo/:level", levelController.getLevel);

    
    // CHARACTER ROUTES

    app.post("/api/createCharacter", characterController.create);

    app.get("/api/character", characterController.getAll);

    app.get("/api/character/:id", characterController.getOne);

    app.put("/api/updateCharacter/:id", characterController.update);

    app.delete("/api/deleteCharacter/:id", characterController.delete);

    // BISUM ROUTES

    app.post("/api/createBisum", bisumController.create);

    app.get("/api/bisum", bisumController.getAll);

    app.get("/api/bisum/:id", bisumController.getOne);

    app.get("/api/sendMoney", bisumController.sendMoney);


    // INVENTORY ROUTES

    app.post("/api/createObject", inventoryController.create);

    app.get("/api/object", inventoryController.getAll);

    app.get("/api/object/:id", inventoryController.getOne);

    app.put("/api/updateObject/:id", inventoryController.update);

    app.delete("/api/deleteObject/:id", inventoryController.delete);


    // ROSHAR CALENDAR ROUTES

    app.post("/api/rosharCalendar", rosharCalendarController.create);

    app.get("/api/rosharCalendar", rosharCalendarController.getAll);

    app.get("/api/rosharCalendar/:id", rosharCalendarController.getOne);

    app.put("/api/updateRosharCalendar/:id", rosharCalendarController.update);

    app.delete("/api/deleteRosharCalendar/:id", rosharCalendarController.delete);

    app.get("/api/findEnabledRosharCalendar", rosharCalendarController.findEnabled);
  }