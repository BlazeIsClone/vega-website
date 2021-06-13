const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router({});

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  image: String,
  subtitle: String,
  headline: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

//Save to DB

const data = {
  image: "thisImage",
  subtitle: "News",
  headline: "Candy Painted",
  body: "Amazing color comes to life today wittness",
};

//const newBlogPost = new BlogPost(data);

/*
newBlogPost.save((error) => {
  if (error) {
    console.log("error while saving data");
  } else {
    console.log("Data Saved");
  }
});

*/
app.get("/api", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("Data", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
