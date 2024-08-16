import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UpdateStudent from "./components/UpdateStudent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
export default function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}