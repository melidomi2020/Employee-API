const express = require("express");
const Authrouter = express.Router();
const AuthController = require("../controllers/AuthController")

//router.get("/", AuthController .getAllEmployees);
Authrouter.post("/signup", AuthController.register);
Authrouter.post("/login", AuthController.login);


module.exports =Authrouter;
