import { Request, Response } from "express";

class AssetsController {
  static async uploadAssets(req: Request, res: Response) {
    try {
      const fileData = (req as any)?.file;
      if (!fileData) {
        return res.status(500).json({ message: "Image Upload failed" });
      }
      res.json({ message: "File Uploaded Successfully", data: fileData });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: error });
    }
  }
}

export default AssetsController;
