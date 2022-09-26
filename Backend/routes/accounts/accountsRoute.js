const express = require("express");
const {
  createAccountCtrl,
  accountSingleCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
  accountAllCtrl,
} = require("../../controllers/accounts/accountsCtrl");
const isLogin = require("../../middlewares/isLogin");

const accountsRoute = express.Router();

//POST/api/v1/accounts
accountsRoute.post("/", isLogin, createAccountCtrl);

//GET/api/v1/accounts/:id
accountsRoute.get("/:id", accountSingleCtrl);

//DELETE/api/v1/accounts/:id
accountsRoute.delete("/:id", deleteAccountCtrl);

//PUT/api/v1/accounts/:id
accountsRoute.put("/:id", updateAccountCtrl);

//GET/api/v1/accounts
accountsRoute.get("/", accountAllCtrl);

module.exports = accountsRoute;
