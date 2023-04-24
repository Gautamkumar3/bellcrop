const express = require("express");
const { createComplaint, getComplaint } = require("../controller/complaint");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const complaintRouter = express.Router();

complaintRouter.post("/create", createComplaint);
complaintRouter.get("/", AuthMiddleware, getComplaint);

module.exports = complaintRouter;
