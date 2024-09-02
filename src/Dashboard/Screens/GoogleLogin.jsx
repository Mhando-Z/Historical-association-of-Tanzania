import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginComponent = () => {
  const handleLoginSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("Google Login Success:", decoded);
    // Here, you can send the token to your backend for verification
  };

  const handleLoginFailure = (error) => {
    console.log("Google Login Failed:", error);
  };

  return (
    <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
  );
};

export default GoogleLoginComponent;
