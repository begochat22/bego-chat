import express from "express";
import "dotenv/config";
import cors from "cors";
import session from "express-session";
import databaseConnection from "./config/mongoDb.js";
import passport from "passport";
import initRoutes from "./api/index.js";
import cookieParser from "cookie-parser";
import ENV from "./config/ENV.js";
const app = express();
const PORT = process.env.PORT || 4000;
// * Middleware
app.use(cors({
    origin: [ENV.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: ENV.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
}));
app.use(passport.initialize());
app.use(passport.session());
initRoutes(app);
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
app.listen(PORT, async () => {
    await databaseConnection();
    console.log(`Server is running on PORT ${PORT}`);
});
