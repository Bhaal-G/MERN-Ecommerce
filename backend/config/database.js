const mongoose = require("mongoose");

const connectDatabase = () => {
  //   console.log("-");
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "Ecommerce",
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
