
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CoursesPage from "./pages/Courses";
import About from "./pages/About";
import Lecture from "./pages/Lecture";
import Congrats from "./pages/Congrats";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import AdminPanel from "./pages/AdminPanel";
import Syllabus2 from "./pages/Syllabus2";
import Syllabus3 from "./pages/Syllabus3";
import CurrentCourse from "./pages/CurrentCourse";
import CourseCom from "./pages/CourseCompleted";

const App = () => {
  const location = useLocation();
  const adminRoutes = ['/adminWelcome'];

  return (
    <div className="min-h-screen flex flex-col">
      {!adminRoutes.includes(location.pathname) && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/Initialsyllabus" element={<Syllabus2 />} />
          <Route path="/syllabus" element={<Syllabus3 />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/adminWelcome" element={<AdminPanel />} />
          <Route path="/currentCourse" element={<CurrentCourse/>} />
          <Route path="/courseCompleted" element={<CourseCom />} />
        </Routes>
      </main>
      {!adminRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
