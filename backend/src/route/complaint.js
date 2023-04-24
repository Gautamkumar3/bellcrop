const express = require("express");
const { createComplaint } = require("../controller/complaint");

const complaintRouter = express.Router();

complaintRouter.post("/create", createComplaint);

module.exports = complaintRouter;
