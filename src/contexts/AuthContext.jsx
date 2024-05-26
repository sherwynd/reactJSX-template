import React, { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../stores/reducer/profileSlice";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      if (storedProfile) {
        setUser(storedProfile);
      } else {
        dispatch(fetchProfile(storedAccessToken));
      }
    } else {
      logout();
    }
  }, []);

  // const getAuthHeaders = (token) => {
  //   return {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   };
  // };

  const login = (newAccessToken, newRefreshToken) => {
    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    // fetchProfile(newAccessToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("profile");
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    setProfilePicture(null);
  };

  const refreshAccessToken = async () => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (!storedRefreshToken) return;
    // BUG Cannot USE
    try {
      const response = await fetch("http://localhost:3000/auth/refreshToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: storedRefreshToken }),
      });
      const data = await response.json();
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        setAccessToken(data.accessToken);
        return data.accessToken;
      }
    } catch (error) {
      console.error("Failed to refresh access token", error);
      logout();
    }
  };

  // const fetchProfile = async (token) => {
  //   try {
  //     const response = await fetch("http://localhost:3000/auth/getToken", {
  //       method: "GET",
  //       headers: getAuthHeaders(token),
  //     });
  //     if (response.status === 401) {
  //       // Token might be expired, try to refresh it
  //       const newAccessToken = await refreshAccessToken();
  //       if (newAccessToken) {
  //         const newResponse = await fetch(
  //           "http://localhost:3000/auth/getToken",
  //           {
  //             method: "GET",
  //             headers: getAuthHeaders(),
  //           }
  //         );
  //         if (newResponse.ok) {
  //           const data = await newResponse.json();
  //           // console.log(data);
  //         } else {
  //           throw new Error("Failed to fetch Profile");
  //         }
  //       }
  //     } else if (response.ok) {
  //       const data = await response.json();
  //     } else {
  //       throw new Error("Failed to fetch Profile");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     logout();
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        user,
        profilePicture,
        login,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
