const StudentModel = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    await StudentModel.create(req.body);
    res.status(201).json({ status: "Student created successfully." });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const findStudents = async (req, res) => {
  try {
    const data = await StudentModel.find({});
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (student == null) {
      res.status(404).json({ status: "Student not found." });
    } else {
      res.status(201).json({ status: "Student updated successfully." });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await StudentModel.findByIdAndDelete(req.params.id);
    if (student == null) {
      res.status(404).json({ status: "Student not found." });
    } else {
      res.status(200).json({ status: "Student deleted successfully." });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { createStudent, findStudents, updateStudent, deleteStudent};