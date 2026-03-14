const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Elymas AI Server is Running 🚀");
});

// Chat route
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  res.json({
    reply: "You said: " + userMessage
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
