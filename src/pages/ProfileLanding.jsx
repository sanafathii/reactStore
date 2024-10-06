import React from "react";
import { Outlet } from "react-router-dom";

export default function ProfileLanding() {
  return (
    <div>
      <h1>layout Profile</h1>
      <Outlet />
    </div>
  );
}
