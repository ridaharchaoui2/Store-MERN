import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import updateRouter from "./routes/uploadRoute.js";

//Middlewares import
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

// 1. GLOBAL MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
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
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/uploads", updateRouter); // Serve uploaded files statically

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_ID });
});

// 3. STATIC FILES & PRODUCTION LOGIC
const __dirname = path.resolve();

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// 4. ERROR HANDLING (Must be after all routes)
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!!!!`);
});
