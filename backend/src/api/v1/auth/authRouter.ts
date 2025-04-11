import express from "express";
import "../../../helper/passport.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import AuthController from "../../../controller/auth/AuthController.js";

const initAuthRoutes = () => {
  const authRouter = express.Router();

  authRouter.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  authRouter.get("/", (req, res) => {
    res.send("welcom to Auth Service");
  });

  authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: `${process.env.FRONTEND_URL}/auth-fail`,
    }),
    async (req, res) => {
      const token = jwt.sign(
        { id: (req as any).user._id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "7day" }
      );
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
    }
  );

  authRouter.post("/register", AuthController.register);
  authRouter.post("/login", AuthController.login);

  // logout to user
  authRouter.get("/logout", AuthController.logout);

  // verify
  authRouter.get("/verify", AuthController.verify);

  return authRouter;
};

export default initAuthRoutes;
