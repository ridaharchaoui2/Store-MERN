import express from "express";
import productsFace from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  return res.send("API is running....");
});
app.get("/api/products", (req, res) => {
  return res.json(productsFace);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}!!!!`);
});
