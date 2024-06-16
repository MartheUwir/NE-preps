const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();
app.use(cors({ origin: "*" }));
// Middleware
app.use(bodyParser.json());

// MySQL Connection
const sequelize = new Sequelize({database:config.mysql.database,username: config.mysql.user, password: config.mysql.password,
  host: config.mysql.host,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log("MySQL Connected"))
  .catch(err => console.log("Error: " + err));

// Routes
const tokenRoutes = require("./routes/tokens");
app.use("/api", tokenRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
