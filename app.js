const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/employee-routes");
const Authrouter = require("./routes/auth");
const EmployeeModel = require("./model/Employee");
const app = express();

// Middlewares
app.use(express.json());
app.use("/api/emp/employees", router);
app.use("/api/user", Authrouter);
app.use("/api/user", Authrouter);
 // localhost:5000/employee


mongoose
  .connect(
    "mongodb+srv://admin:s36908814@cluster0.synjz4t.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log(err));
  app.listen(5000,()=>console.log("server is running"));
