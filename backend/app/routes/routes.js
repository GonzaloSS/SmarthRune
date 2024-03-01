const conversionController = require("../controllers/conversion.controller");
const userController = require("../controllers/user.controller");
const levelController = require("../controllers/level.controller");
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

    // LEVEL ROUTES

    app.post("/api/createLevel", levelController.create);

    app.get("/api/level", levelController.getAll);

    app.get("/api/level/:id", levelController.getOne);

    app.put("/api/updateLevel/:id", levelController.update);

    app.delete("/api/deleteLevel/:id", levelController.delete);
  }