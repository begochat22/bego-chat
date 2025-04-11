import mongoose from "mongoose";
import ENV from "./ENV.js";

mongoose.set("strictQuery", false);

const connectDb = async (uri: string): Promise<void> => {
  if (!uri) {
    console.error("MongoDB URI is not provided");
    throw new Error("MongoDB URI is not provided");
  }

  return mongoose
    .connect(uri, {
      // Serverless-friendly options
      serverSelectionTimeoutMS: 5000, // Reduce server selection timeout
      socketTimeoutMS: 30000, // Reduce socket timeout
      connectTimeoutMS: 10000, // Set connect timeout
      maxPoolSize: 10, // Limit connection pool size for serverless
    })
    .then(() => {
      console.log("Connected to Database Successfully");
    })
    .catch((error) => {
      console.log("MongoDB Connection Error:", error);
      throw error; // Re-throw to allow handling in calling function
    });
};

// Use a connection caching pattern for serverless
let cachedConnection: mongoose.Connection | null = null;

const databaseConnection = async () => {
  try {
    // If connection already exists, reuse it
    if (cachedConnection && mongoose.connection.readyState === 1) {
      console.log("Using existing database connection");
      return;
    }

    // Otherwise establish a new connection
    await connectDb(ENV.MONGO_URL);
    cachedConnection = mongoose.connection;
  } catch (error) {
    console.log("Database connection failed:", error);
    throw error;
  }
};

export default databaseConnection;
