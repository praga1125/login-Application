const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(cors());

//  mongo connection
mongoose.Promise = global.Promise;
const MONGODB_URI =
  "mongodb+srv://rpragacs:Vikipraga1125@cluster0.kv3528y.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Express with Nodemon!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
