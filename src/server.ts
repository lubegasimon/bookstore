const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/user");

const app = express();

const port = 3000;

app.use(bodyParser.json());
// urlencoded options is for allowing data coming from the form
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get("/", (_req, res) => {
  res.send("Welcome to bookstore");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/`);
});
