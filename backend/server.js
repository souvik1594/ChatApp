const express = require("express");
const data = require("./data/data.js");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  })
);

dotenv.config();

const port = process.env.PORT || 5000;

app.get("/api/v1/chats", (req, res) => {
  console.log("request hit for all chats");
  console.log(data);
  res.send(data);
});
app.get("/api/v1/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = data.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
