require("dotenv").config();
const app = require("./app");
const dbConenct = require("./db/db");

dbConenct().then((res) => {
  if (res.connection.host) {
    console.log("Database connected", res.connection.host);

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  }
});
