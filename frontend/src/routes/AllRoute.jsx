import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Page/Register";
import Login from "../Page/Login";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={"Home"} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoute;
