import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "../../App";
import AboutPage from "../aboutpage/AboutPage";
import ProjectsPage from "../projects/ProjectsPage";
import ContactPage from "../contact/ContactPage";
import HomePage from "../home/HomePage";

const AppRouter = () => (
  <Router>
    <App />
    <Routes>
      <Route path = "/" element ={<Navigate to="/home"/>}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
