import express from "express";
import initV1Routes from "./v1/index.js";

const initRoutes = (app: express.Application) => {
  app.use("/api", initV1Routes());
};

export default initRoutes;
