require("dotenv").config();
const express = require("express");
const path = require("path");
const userRouter = require("./router/userRouter");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.use("/api/user", userRouter);
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`server is listening in port: ${PORT}`);
});

app.get("/getFile", (req, res) => {
  res.sendFile(path.join(__dirname, "upload", "machine.jpg"));
});
