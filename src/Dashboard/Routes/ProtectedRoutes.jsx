import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const protectedAdminRoutes = [
    "heroSect",
    "Partners",
    "MembersMgt",
    "Announcement",
    "AboutSect",
    // "UserProfile",
    "PresoSect",
    "GallerySect",
    "StaffsSect",
    "ContactUsSect",
    "Research&publications",
  ];

  let user = null;
  try {
    const token = localStorage.getItem("token");
    if (token) {
      user = jwtDecode(token);
    }
  } catch (error) {
    console.error("Failed to decode token:", error);
  }

  const isProtectedAdminRoute = protectedAdminRoutes.some((route) =>
    location.pathname.includes(route)
  );

  if (isProtectedAdminRoute && (!user || user.is_staff !== true)) {
    return <Navigate to="/Login/" replace />;
  }

  return children;
};

export default ProtectedRoute;
