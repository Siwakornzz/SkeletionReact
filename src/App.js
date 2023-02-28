import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { NotFound404Page } from "./pages/404";

// const roles = {
//   user: 2001,
//   admin: 5150,
// };

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[roles.user]} />}>
          <Route path="/" element={<Home />} />
        </Route> */}

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
