const studentController = require("../controllers/student.controller");
const express = require("express")
const router = express.Router();

router.get("/", studentController.findStudents);
router.post("/", studentController.createStudent);
router.put("/:id",studentController.updateStudent);
router.delete("/:id",studentController.deleteStudent);

module.exports = router;


