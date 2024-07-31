const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
})

const StudentModel = mongoose.model.insert || mongoose.model("students",studentSchema);

module.exports = StudentModel;

