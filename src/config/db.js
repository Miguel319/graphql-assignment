const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env["DB_URI"], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { connectToDb };
