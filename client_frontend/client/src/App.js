import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import './App.css';
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TestComponent from "./components/TestComponent";
import Contactus from "./views/Pages/Contactus";
import Home from './views/Pages/Home';
import Products from "./views/Pages/Products";
import Moodboard from "./views/Pages/Moodboard";


function App() {
  return (
    <>
     
     <BrowserRouter>
     <Navbar />
     
     

     <Routes>
      <Route path="/api" element={<TestComponent />} />
       <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/moodboard" element={<Moodboard />} />
       
       <Route path="/contact-us" element={<Contactus />} />
       {/* <Route path="/api/pirates/create" element={<Create/>} /> */}
       {/* <Route path="/api/pirates/:id" element={<DisplayOne/>} /> */}
      
       
       
       
       
       <Route path="*" element={<><h1>Error</h1> </>} />

     </Routes>
     {/* <Footer /> */}
     </BrowserRouter>
     
    </>
  );
}

export default App;
