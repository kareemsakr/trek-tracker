var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

require("./models/user");

var authRouter = require("./routes/auth");

var app = express();

app.use(bodyParser.json());
app.use(authRouter);

const mongoURI =
  "mongodb+srv://admin:abc1234@lists-hygz2.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", err => {
  console.log("successfully connected to mongo instance");
});

mongoose.connection.on("error", err => {
  logError(err);
});

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(3000, () => console.log("listening on port 3000"));
