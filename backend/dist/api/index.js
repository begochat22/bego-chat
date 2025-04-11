import initV1Routes from "./v1/index.js";
const initRoutes = (app) => {
    app.use("/api", initV1Routes());
};
export default initRoutes;
