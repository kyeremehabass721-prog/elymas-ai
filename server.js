import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {

    const userMessage = req.body.message;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Elymas, a helpful assistant for Kyeremeh Abass website." },
        { role: "user", content: userMessage }
      ]
    });

    res.json({ reply: response.choices[0].message.content });

  } catch (error) {
    res.json({ reply: "Sorry, something went wrong." });
  }
});

app.listen(3000, () => {
  console.log("Elymas AI running");
});