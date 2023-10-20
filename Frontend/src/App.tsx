import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import "../styles/Nav.css";
import "../styles/Landing.css";
import "../styles/Contact.css";
import About from "./components/About";
import Models from "./components/Models";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Careers from "./components/Careers";

function App() {
  const { page } = useParams(); 

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    if (currentPage) {
      localStorage.setItem('currentPage', currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/about"} element={<About />} /> 
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App;
