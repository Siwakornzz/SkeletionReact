import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import Layout from "./Layout/Layout";
import { NotFound404Page } from "./pages/404Notfound/404";
import Homepage from "./pages/HomePage/Homepage";
import { Login } from "./pages/Login/Login";
import { UnAuthorized } from "./pages/Unauthorized/UnAuthorized";

const roles = {
  user: "User",
  admin: "Admin",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} /> */}
        <Route path="unauthorized" element={<UnAuthorized />} />

        {/* we want to protect these routes */}
        <Route
          element={<RequireAuth allowedRoles={[roles.user, roles.admin]} />}
        >
          <Route path="/" element={<Homepage />} />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[roles.admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}
        {/* 
        <Route element={<RequireAuth allowedRoles={[roles.admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}

        {/* catch all */}
        <Route path="*" element={<NotFound404Page />} />
      </Route>
    </Routes>
  );
}

export default App;
