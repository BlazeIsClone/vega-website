const express = require("express");
const path = require("path");
const app = express();
const port = 0.0.0.0.;

app.use(express.static(path.join(__dirname, "/")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

app.listen(port, () => console.log(`Listening to ${port}`));
