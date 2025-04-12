import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import path from "path";
function uploadMiddleware(folderName) {
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: (req, file) => {
            const folderPath = `${folderName.trim()}`;
            const fileExtension = path.extname(file.originalname).substring(1);
            const publicId = `${file.fieldname}-${Date.now()}`;
            return {
                folder: folderPath,
                public_id: publicId,
                format: fileExtension,
            };
        },
    });
    return multer({
        storage: storage,
        limits: {
            fileSize: 25 * 1024 * 1024, // keep images size < 25 MB
        },
    });
}
export default uploadMiddleware;
