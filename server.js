const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Require model! 
const Workout = require("./models/workout");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.post("/api/workouts"), function (req, res) {
  const workout = new Workout(req.body);

  workout.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(workout);
  })
}

app.get("/api/workouts", (req, res) => {

  Workout.find({}).then((data, err) => {
    if(err) throw err;
    res.send(data);
  });
});

app.get("/api/workouts/:id", (req, res) => {

  Workout.findOne({

    _id: req.params.id
  })
  .then((doc) => {
    if (doc) {
      console.log(doc);
    } else {
      console.log("no data exist");
    }
  });
});

app.put("/api/workouts/", (req, res) => {
  const query = req.body;
  Workout.update({}, {sort: {name: 1 } }).then((data, err) => {

    console.log(data);
    res.send(data);
    if(err) throw err;
  })
})

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})

module.exports = app;