import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Page/Register";
import Login from "../Page/Login";
import ComplaintForm from "../Page/ComplaintForm";
import AllComplaint from "../Page/AllComplaint";
import ComplaintDetails from "../Page/ComplaintDetails";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AllComplaint />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/complaint_form"
        element={
          <PrivateRoute>
            <ComplaintForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/complaint_details/:id"
        element={
          <PrivateRoute>
            <ComplaintDetails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoute;
