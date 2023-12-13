import React from "react";
import { Outlet, Navigate } from "react-router-dom"
const ProtectedRoutes = () => {
  const cookie = document.cookie.split(';').find((cookie) => cookie.startsWith('Authorization'));
const token = cookie?.split('=')[1];

  return (
    <>
      {token ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}

export default ProtectedRoutes