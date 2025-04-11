import { useState, useEffect } from "react";
import AuthActions from "@/actions/auth";
import api from "@/config/api";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  department: string;
  role: string;
  googleId: string | null;
  profilePicture: string | null;
  [key: string]: any;
}

const useSession = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await AuthActions.verify();

      if (response?.auth && response?.user) {
        setUser(response.user);
        setLoggedIn(true);
      } else {
        setUser(null);
        setLoggedIn(false);
      }
    } catch (error) {
      console.log("Error verifying user", error);
      setUser(null);
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await api.get("/api/auth/logout", { withCredentials: true });
      setUser(null);
      setLoggedIn(false);
      router.replace("/auth/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const refresh = () => {
    fetchUser();
  };

  return { user, loading, loggedIn, setLoggedIn, logout, refresh };
};

export default useSession;
