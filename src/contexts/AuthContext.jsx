import React, { createContext, useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../stores/reducer/profileSlice";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [currentRefId, setCurrentRefId] = useState(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    return profile ? profile.refId : "";
  });

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      if (storedProfile) {
        setUser(storedProfile);
        setCurrentRefId(storedProfile.refId);
      } else {
        dispatch(fetchProfile(storedAccessToken)).then((profileData) => {
          const profile = profileData.payload;
          setUser(profile);
          setCurrentRefId(profile.refId);
          localStorage.setItem("profile", JSON.stringify(profile));
        });
      }
    } else {
      logout();
    }
  }, [dispatch]);

  const login = async (newAccessToken, newRefreshToken) => {
    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    const profileData = await dispatch(fetchProfile(newAccessToken));
    const profile = profileData.payload;
    localStorage.setItem("profile", JSON.stringify(profile));
    setCurrentRefId(profile.refId);
    setUser(profile);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("profile");
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    setProfilePicture(null);
    setCurrentRefId("");
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

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        user,
        profilePicture,
        currentRefId,
        login,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
