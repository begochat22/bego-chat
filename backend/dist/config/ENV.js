const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;
const BACKEND_URL = process.env.BACKEND_URL;
const MONGO_URL = process.env.MONGO_URL;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const SESSION_SECRET = process.env.SESSION_SECRET;
const ENV = {
    PORT,
    FRONTEND_URL,
    MONGO_URL,
    GOOGLE_CALLBACK_URL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    JWT_SECRET_KEY,
    SESSION_SECRET,
    BACKEND_URL,
};
export default ENV;
