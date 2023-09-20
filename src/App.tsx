
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { useState, createContext} from "react"
import Layout from "./components/Layout"
import Landing from "./components/Landing";
import "../styles/Nav.css"
import "../styles/Landing.css"

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
