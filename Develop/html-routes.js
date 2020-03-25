app.post("/submit", ({ body }, res) => {
    // Save the request body as an object called book
    const exercise = body;
    // If we want the object to have a boolean value of false,
    // we have to do it here, because the ajax post will convert it
    // to a string instead of a boolean
    exercise.resistance = false;
    db.exercises.insert(exercise, (error, data) => {
      if (error) {
        res.send(error)
      } else {
        res.send(data)
      }
    });
  });
  // Find all books marked as read
  app.get("/resistance", (req, res) => {
    db.exercises.find({resistance: true},  (error, data) => {
      if (error) {
        res.send(error)
      } else {
        res.send(data)
      }
    });
  });
  // Find all exercises marked as cardio
  app.get("/cardio", (req, res) => {
    db.exercises.find({resistance: false},  (error, data) => {
      if (error) {
        res.send(error)
      } else {
        res.send(data)
      }
    });
  });
  // Mark a exercise as as resistance
  app.put("/markresistance/:id", (req, res) => {
    // Remember: when searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))
    db.exercises.update(
      { _id: mongojs.ObjectId(req.params.id) },
      { $set: { resistance: true } },
      (error, data) => {
        if (error) {
          res.send(error)
        } else {
          res.send(data)
        }
    });
  });
  // Mark a exercise as having been not read
  app.put("/markcardio/:id", (req, res) => {
    // Remember: when searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))
    // Remember: when searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))
    db.exercises.update(
      { _id: mongojs.ObjectId(req.params.id) },
      { $set: { resistance: false } },
      (error, data) => {
        if (error) {
          res.send(error)
        } else {
          res.send(data)
        }
    });
  });
  // Listen on port 3000
  app.listen(3000, () => {
    console.log("App running on port 3000!");
  });