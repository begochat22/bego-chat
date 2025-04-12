import express from "express";
import initAuthRoutes from "./auth/authRouter.js";
import initAssetsRouter from "./assets/index.js";

const initV1Routes = () => {
  const v1Router = express.Router();

  v1Router.get("/", (req, res) => {
    res.send("API v1 is working!");
  });

  v1Router.use("/auth", initAuthRoutes());
  v1Router.use("/assets", initAssetsRouter());

  return v1Router;
};

export default initV1Routes;
