import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/mongoDb.js";
import databaseConnection from "./config/mongoDb.js";
const app: Application = express();
const PORT = process.env.PORT || 4000;

// * Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  databaseConnection();
});
