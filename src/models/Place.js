const { Schema, model } = require("mongoose");

const PlaceSchema = new Schema(
  {
    country: String,
    year: String,
    area: Number,
    totalPopulation: Number,
  },
  { timestamps: true }
);

module.exports = model("Place", PlaceSchema);
