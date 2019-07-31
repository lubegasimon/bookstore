const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/user");

const app = express();

const port = 3000;
const hostname = "localhost";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get("/", (_req, res) => {
  res.send("Welcome to bookstore");
});

app.listen(port, hostname, () => {
  console.log(`App running at http://${hostname}:${port}/`);
});
