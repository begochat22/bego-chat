import mongoose from "mongoose";
import ENV from "./ENV.js";
mongoose.set("strictQuery", false);
const connectDb = async (uri) => {
    if (!uri) {
    }
    return mongoose
        .connect(uri)
        .then(() => {
        console.log("Connected to Database Successfully");
    })
        .catch((error) => {
        console.log(error);
    });
};
const databaseConnection = async () => {
    try {
        await connectDb(ENV.MONGO_URL);
    }
    catch (error) {
        console.log(error);
    }
};
export default databaseConnection;
