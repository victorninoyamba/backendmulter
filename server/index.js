const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const port = 5000;
const fs = require("fs");
const propertyModel = require("./models/addproperty");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://jergcauso:MariaAndrea100711@cluster0.xtgcafp.mongodb.net/RealStateDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database Connected successfully"))
  .catch((err) => console.log("it has an error", err));

app.listen(port, () => {
  console.log("Server Running Successfully at Port: " + port);
});

//START Add property with images by Multer==================================================================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/addproperty", upload.array("Images", 6), (req, res) => {
  const images = req.files.map((file) => {
    return {
      data: fs.readFileSync(file.path),
      contentType: file.mimetype,
    };
  });

  const saveImage = new propertyModel({
    availability: req.body.availability,
    propertytype: req.body.propertytype,
    sellingprice: req.body.sellingprice,
    description: req.body.description,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    carparks: req.body.carparks,
    floorarea: req.body.floorarea,
    homefeatures: req.body.homefeatures,
    neighborhoodfeatures: req.body.neighborhoodfeatures,
    foodhubs: req.body.foodhubs,
    grocery: req.body.grocery,
    gym: req.body.gym,
    school: req.body.school,
    store: req.body.store,
    hospital: req.body.hospital,
    neighborhoodvicinity: req.body.neighborhoodvicinity,
    images: images,
  });

  saveImage
    .save()
    .then(() => {
      console.log("Property Successfully added!");
      res.send("Property Successfully added!");
    })
    .catch((err) => {
      console.log(err, "Error has occurred");
      res.status(500).send("Error occurred while saving images");
    });
});
//END Add property with images by Multer==================================================================================
//START Search all properties============================================================================================

app.get("/", async (req, res) => {
  const allData = await propertyModel.find();
  res.json(allData);
});

//END Search all properties============================================================================================
//START Search all properties============================================================================================
