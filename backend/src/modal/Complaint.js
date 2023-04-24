const mongoose = require("mongoose");
const validator = require("validator");

const complaintSchema = mongoose.Schema({
  details: { type: String, required: [true, "details is missing"] },
  created_by: {
    type: String,
    required: [true, "creator of complaint name is missing"],
  },
  email: {
    type: String,
    required: [true, "email is missing"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  topic: { type: String, required: [true, "Topic is missing"] },
  category: { type: String, required: true },
  img: { type: String },
});

const Complaint = mongoose.model("complaint", complaintSchema);

module.exports = Complaint;
