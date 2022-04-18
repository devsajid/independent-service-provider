import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./Componenet/Pages/About/About";
import Home from "./Componenet/Pages/Home/Home/Home";
import Blog from "./Componenet/Pages/Blog/Blog";
import Checkout from "./Componenet/Pages/Checkout/Checkout";
import Navbar from "./Componenet/Shared/Navbar/Navbar";
import Footer from "./Componenet/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
