const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const port = process.env.API_PORT || 4000;

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    message: "API is running"
  });
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch users"
    });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required"
      });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name
      }
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      error: "Failed to create user"
    });
  }
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});