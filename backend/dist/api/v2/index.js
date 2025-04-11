import express from "express";
const initV2Routes = () => {
    const v2Router = express.Router();
    v2Router.get("/", (req, res) => {
        res.send("Welcome to V2 API");
    });
    return v2Router;
};
