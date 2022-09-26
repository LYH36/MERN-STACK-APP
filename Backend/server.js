const express = require("express");
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data
//users routes
app.use("/api/v1/users", usersRoute);

//account routes
app.use("/api/v1/accounts", accountsRoute);

//transactions routes
app.use("/api/v1/transactions", transactionsRoute);

//Error Handler
app.use(globalErrHandler);

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
