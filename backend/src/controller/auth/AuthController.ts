import { Request, Response, NextFunction } from "express";
import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserController from "../user/userController.js";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

class AuthController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as LoginRequestBody;

    try {
      const existingUser = await User.findOne({ email: email });

      if (!existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid email or password." });
      }

      const matchPassword = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!matchPassword) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid email or password." });
      }

      const token = jwt.sign(
        { id: existingUser._id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "7day" }
      );

      console.log("body : ", req.body, "\n token : ", token);

      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user: existingUser,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }
  }

  static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { name, email, password } = req.body as RegisterRequestBody;

    try {
      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        // Check if the user has registered via Google
        if (existingUser.googleId && !existingUser.password) {
          // User registered via Google and does not have a password
          const hashedPassword = await bcrypt.hash(password, 10);
          existingUser.password = hashedPassword;
          await existingUser.save();
          return res.status(200).json({
            success: true,
            message:
              "Password set successfully. You can now log in using your email and password.",
            user: existingUser,
          });
        } else if (existingUser.password) {
          // User already registered with email and password
          return res.status(400).json({
            success: false,
            message: "Email already registered. Please log in.",
          });
        } else {
          // Other case where the user exists but no password or googleId (this shouldn't usually happen)
          return res.status(400).json({
            success: false,
            message: "Email already registered. Please log in.",
          });
        }
      }

      // New user registration
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        googleId: null,
      });

      console.log("new user ", newUser, "\n password: ", password);
      const user = await newUser.save();

      return res.status(201).json({
        success: true,
        message: "Registration successful.",
        user: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error.",
        error,
      });
    }
  }

  static async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      return res
        .status(200)
        .cookie("accessToken", false, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          expires: new Date(0),
        })
        .clearCookie("accessToken")
        .json({
          success: true,
          message: "User logout successfully",
        });
    } catch (error) {
      return res.status(400).json({
        message: "User not logged out",
        error,
      });
    }
  }

  static async verify(req: Request, res: Response) {
    console.log("verify token called");
    console.log("req.cookies : ", req.cookies);
    console.log("req.headers : ", req.headers);
    console.log("req : ", req);
    const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(403).json({ message: "No Token Found", auth: false });
    }

    try {
      const decoded = jwt.verify(String(token), process.env.JWT_SECRET_KEY);
      if (!decoded || !(decoded as any).id) {
        return res.status(403).json({ message: "Invalid Token", auth: false });
      }

      (req as any).id = (decoded as any).id;
      const userData = await UserController.getUserById((req as any).id);
      return res.status(200).json({ auth: true, user: userData });
    } catch (error) {
      return res.status(403).json({ message: "Invalid Token", auth: false });
    }
  }
}

export default AuthController;
