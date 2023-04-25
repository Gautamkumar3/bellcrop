import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Page/Register";
import Login from "../Page/Login";
import ComplaintForm from "../Page/ComplaintForm";
import AllComplaint from "../Page/AllComplaint";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AllComplaint/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complaint_form" element={<ComplaintForm />} />
    </Routes>
  );
};

export default AllRoute;
