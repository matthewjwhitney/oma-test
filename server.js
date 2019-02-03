const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Register = require("./models/register");

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

const dbRoute =
  "mongodb://oma-test:75ZTdHcBJpPFHzt@ds119765.mlab.com:19765/oma-test";

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_test", (req, res) => {
  res.send({ express: "EXPRESS BACKEND IS CONNECTED TO REACT" });
});

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/putData", (req, res) => {
  let data = new Register();

  const { fullName, email, subscribe } = req.body;

  data.fullName = fullName;
  data.email = email;
  data.subscribe = subscribe;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for the http requests
app.use("/api", router);
