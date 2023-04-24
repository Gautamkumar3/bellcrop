const complaintModal = require("../modal/Complaint");

const createComplaint = async (req, res) => {
  try {
    const newComplaint = new complaintModal({ ...req.body });
    await newComplaint.save();
    return res.status(200).send({
      status: "success",
      message: "Complaint create successfully",
      data: newComplaint,
    });
  } catch (er) {
    return res.status(500).send({ status: "error", message: er.message });
  }
};

module.exports = {
  createComplaint,
};
