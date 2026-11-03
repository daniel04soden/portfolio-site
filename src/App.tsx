import "./index.css";
import {Routes, Route} from "react-router"
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";

export default function App() {
  return (
      <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blogs />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
  )
}

