require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const startupRoutes = require("./routes/startup");
const uploadRoute = require("./routes/upload");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/startup", startupRoutes);
app.use("/api/auth", require("./routes/auth"));
app.use("/api/upload", uploadRoute);
app.use("/uploads", express.static("uploads"));
app.use("/api/mentors", require("./routes/mentor"));
app.use("/api/startups", require("./routes/startup"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/jobs", require("./routes/job"));
app.use("/api/applications", require("./routes/application"));
app.use("/api/startup-mentors", require("./routes/StartupMentors"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, () => console.log("Server running on port 5000"))
  )
  .catch((err) => console.error(err));
