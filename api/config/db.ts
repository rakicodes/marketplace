const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
        process.env.NODE_ENV === "dev" ?
            process.env.DB_STRING_DEV : process.env.DB_STRING_PROD
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
