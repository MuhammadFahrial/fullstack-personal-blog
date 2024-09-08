import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProtectedRouteAdmin = ({ children }) => {
  let location = useLocation();
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/admin-only`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.valid) {
            setIsVerified(true);
          } else {
            sessionStorage.removeItem("token");
          }
        })
        .catch((error) => {
          sessionStorage.removeItem("token");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isVerified) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRouteAdmin;
