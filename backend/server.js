import express from "express";
import productsFace from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import cors from "cors";

//Middlewares import
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// 1. GLOBAL MIDDLEWARE

// CORS Logic
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? false : "http://localhost:5173",
    credentials: true,
  }),
);
// 2. API ROUTES
app.use("/api/products", productRouter);

// 4. ERROR HANDLING (Must be after all routes)
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!!!!`);
});
