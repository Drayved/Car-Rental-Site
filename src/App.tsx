import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, useParams } from "react-router-dom";
import Layout from "./components/Layout"
import Landing from "./components/Landing";
import "../styles/Nav.css"
import "../styles/Landing.css"
import "../styles/Contact.css"
import About from "./components/About";
import Models from "./components/Models";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Careers from "./components/Careers";

function App() {
  const { page } = useParams();

  useEffect(() => {
    if (page) {
      localStorage.setItem('page', page);
    }
  }, [page]);

  const lastPage = localStorage.getItem('page');
  
  if (lastPage) {
    window.location.pathname = lastPage;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path={"/about"} element={<About />}/> 
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
      </Route>
    )
  );

  return (
      <RouterProvider router={router}/>
  )
}

export default App
