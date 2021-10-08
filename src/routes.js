const express = require("express");
const HistoryController = require("./controllers/HistoryController");
const UsersController = require("./controllers/UsersController");
const routes = express.Router();

routes.post("/login", UsersController.login);
routes.post("/users", UsersController.create);
routes.get("/users", UsersController.list);
routes.get("/users/:id", UsersController.getUser);
routes.post("/history", HistoryController.create);
routes.get("/history", HistoryController.list);


module.exports = routes;

