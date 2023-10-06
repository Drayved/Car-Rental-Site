
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { useState, createContext} from "react"
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

const defaultAuthValue = null

export const AuthContext = createContext<{
  placeHolder: string | null; 
  setPlaceHolder: React.Dispatch<React.SetStateAction<string | null>>; 
}>({
  placeHolder: defaultAuthValue,
  setPlaceHolder: () => {},
});

function App() {
  const [placeHolder, setPlaceHolder] = useState<string | null>(defaultAuthValue)
  
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
    <AuthContext.Provider value={{ placeHolder, setPlaceHolder }}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
