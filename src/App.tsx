import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
          errorElement={<Error />}
        />
        <Route path="/login" element={<Login />} errorElement={<Error />} />
        <Route path="/signup" element={<SignUp />} errorElement={<Error />} />
        <Route path="/error" element={<Error />} errorElement={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
