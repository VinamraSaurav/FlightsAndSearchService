const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");


const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  if (process.env.DB_SYNC) {
    await db.sequelize.sync({ alter: true });
    console.log("Database synced successfully");
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

setupAndStartServer();
