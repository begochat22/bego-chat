import api from "@/config/api";
import ENV from "@/config/ENV";

class AuthActions {
  static async login({ email, password }: { email: string; password: string }) {
    try {
      const response = await api.post(`${ENV.AUTH_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Login failed");
    }
  }

  static async register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const response = await api.post(`${ENV.AUTH_URL}/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Registration failed");
    }
  }

  static async verify() {
    try {
      const response = await api.get(`${ENV.AUTH_URL}/verify`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export default AuthActions;
