import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth";


dotenv.config();

const app: Express = express();
const connectDB = require("./config/db");
const port = process.env.PORT || 3333;

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Marketplace API!");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Marketplace API listening on port ${port}`);
});
