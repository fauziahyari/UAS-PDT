const express = require("express");
const mongoose = require("mongoose");
const mysql = require("mysql");
const redis = require("redis");
const guruRoutes = require("./routes/guruRoutes");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MySQL connection
const mysqlConnection = mysql.createConnection({
  host: "mysql-master",
  user: "root",
  password: "password",
  database: "guru",
});
mysqlConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// Redis connection
const redisClient = redis.createClient({ host: "redis", port: 6379 });
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

app.use("/guru", guruRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
