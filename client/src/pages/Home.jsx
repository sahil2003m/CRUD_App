import RegisterForm from "../components/RegisterForm";
import StudentTable from "../components/StudentTable";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Home = () => {
  const [data, setData] = useState([{}]);
  const getStudents = async () => {
    try {
      const students = await axios.get("http://localhost:5000/student/");
      setData(students.data);
      toast.info("Students Fetched Successfully");
    } catch (e) {
      toast.error(e.message);
    }
  };

  const createStudent = async (student) => {
    try {
      await axios.post("http://localhost:5000/student/", student);
    getStudents();
    toast.success("Student Created Successfully");
    } catch (e) {
      toast.error(e.message);
      
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/student/${id}`);
    getStudents();
    toast.warn("Student Deleted Successfully");
    } catch(e) {
      toast.error(e.message);
    }
  };
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      <div className="mt-5 mb-5">
        <RegisterForm createStudent={createStudent} />
      </div>
      <div className="mt-5 mb-5 text-center">
        <StudentTable data={data} deleteStudent={deleteStudent} />
      </div>
    </>
  );
};

export default Home;
