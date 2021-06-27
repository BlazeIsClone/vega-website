const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

// Start connection to mongoDb with mongoose
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Defining the shape of the schema
const Schema = mongoose.Schema;
const databaseShape = new Schema();

const homeDataShape = new mongoose.Schema(
  {
    subtitle: String,
    headline: String,
    body: String,
  },
  { collection: "home" }
);
const vegaEvxDataShape = new mongoose.Schema(
  {
    subtitle: String,
    headline: String,
    body: String,
  },
  { collection: "vega-evx" }
);
const blogDataShape = new mongoose.Schema(
  {
    subtitle: String,
    headline: String,
    body: String,
  },
  { collection: "blog" }
);
const investorsDataShape = new mongoose.Schema(
  {
    subtitle: String,
    headline: String,
    body: String,
  },
  { collection: "investors" }
);
const aboutDataShape = new mongoose.Schema(
  {
    subtitle: String,
    headline: String,
    body: String,
  },
  { collection: "about" }
);

//Models
const homePageSchema = mongoose.model("home", homeDataShape);
const vegaEvxSchema = mongoose.model("vega-evx", vegaEvxDataShape);
const blogSchema = mongoose.model("blog", blogDataShape);
const investorsSchema = mongoose.model("investors", investorsDataShape);
const aboutSchema = mongoose.model("about", aboutDataShape);

// API IndexPage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// HomePage
app.get("/api/home", (req, res) => {
  homePageSchema
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(`server caught in response : , ${error}`);
    });
});

// Vega-evx Page
app.get("/api/vega-evx", (req, res) => {
  vegaEvxSchema
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(`server caught in response : , ${error}`);
    });
});

// Blog Page
app.get("/api/blog", (req, res) => {
  blogSchema
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(`server caught in response : , ${error}`);
    });
});

// Investors Page
app.get("/api/investors", (req, res) => {
  investorsSchema
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(`server caught in response : , ${error}`);
    });
});

// About Page
app.get("/api/about", (req, res) => {
  aboutSchema
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(`server caught in response : , ${error}`);
    });
});

// Listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
