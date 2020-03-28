const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workSchema = new Schema({

    name: String,
    rep: Number,
    weight: Number,
    sets: Number,
    duration: Number,
    distance: Number,

    created: {
        type: Date,
        default: Date.now
    }


});

const Workout = mongoose.model("Workout", workSchema);

module.exports = Workout;
