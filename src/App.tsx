import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ForGetPassword from "./pages/forgetpassword";
import Forms from "./pages/Forms";

function App() {

  return (
    <>
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/forgetpassword" element={<ForGetPassword/>}/>
            <Route path="/header" element={<Header/>}/> 
            <Route path="/footer" element={<Footer/>}/>  
            <Route path="/forms" element={<Forms/>}/>
        </Routes>
      </BrowserRouter> 
    </>
    
  )
}

export default App;
