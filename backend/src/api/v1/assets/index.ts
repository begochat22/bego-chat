import express from "express";
import uploadMiddleware from "../../../middleware/upload.middleware.js";
import AssetsController from "../../../controller/assets/index.js";

const upload = uploadMiddleware("thumbnail");

const initAssetsRouter = () => {
  const assetsRouter = express.Router();

  assetsRouter.post(
    "/upload",
    upload.single("image"),
    AssetsController.uploadAssets
  );
  return assetsRouter;
};

export default initAssetsRouter;
