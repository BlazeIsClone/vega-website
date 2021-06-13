const router = require("express").Router();
const app = express();

const fetchData = new fetchData(data);
app.get("/api", (req, res) => {
  fetchData
    .find({})
    .then((data) => {
      console.log("Data", data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
