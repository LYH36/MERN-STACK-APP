const express = require("express");
const {
  createTransactionCtrl,
  transactionSingleCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
  transactionAllCtrl,
} = require("../../controllers/transactions/transactionsCtrl");
const isLogin = require("../../middlewares/isLogin");
const transactionsRoute = express.Router();

//POST/api/v1/transactions
transactionsRoute.post("/", isLogin, createTransactionCtrl);

//GET/api/v1/transactions
transactionsRoute.get("/", transactionAllCtrl);

//GET/api/v1/transactions/:id
transactionsRoute.get("/:id", transactionSingleCtrl);

//DELETE/api/v1/transactions/:id
transactionsRoute.delete("/:id", deleteTransactionCtrl);

//PUT/api/v1/transactions/:id
transactionsRoute.put("/:id", updateTransactionCtrl);

module.exports = transactionsRoute;
