import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/dashboard/Dashboard";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  const [user, setUser] = useState<any>(localStorage.getItem("User") || null);

  return (
    <Router>
      <Layout user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/signup" element={<SignUp user={user} />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<ProtectedRoutes user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
