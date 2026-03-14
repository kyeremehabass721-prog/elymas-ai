require("dotenv").config();

const express = require("express");
const OpenAI = require("openai");
const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/ask", async (req, res) => {
  try {
    const question = req.body.question;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are Elymas AI, a helpful assistant that answers general and Christian questions." },
        { role: "user", content: question }
      ]
    });

    res.json({ answer: completion.choices[0].message.content });

  } catch (error) {
    console.log(error);
    res.json({ answer: "Sorry, something went wrong." });
  }
});

app.listen(3000, () => {
  console.log("Elymas AI running on port 3000");
});