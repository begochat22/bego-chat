import { v2 as cloudinary } from "cloudinary";
import ENV from "./ENV.js";
cloudinary.config({
    cloud_name: ENV.CLOUD_NAME,
    api_key: ENV.CLOUDINARY_KEY,
    api_secret: ENV.CLOUDINARY_SECRET,
});
export default cloudinary;
