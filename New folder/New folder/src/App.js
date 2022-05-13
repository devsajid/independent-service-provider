import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./Componenet/Pages/About/About";
import Home from "./Componenet/Pages/Home/Home/Home";
import Blog from "./Componenet/Pages/Blog/Blog";
import Servicedetail from "./Componenet/Pages/Servicedetail/Servicedetail";
import Checkout from "./Componenet/Pages/Checkout/Checkout";
import Navbar from "./Componenet/Shared/Navbar/Navbar";
import Footer from "./Componenet/Shared/Footer/Footer";
import Login from "./Componenet/Pages/Login/Login/Login";
import Register from "./Componenet/Pages/Login/Register/Register";
import NotFound from "./Componenet/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<Servicedetail></Servicedetail>}
        ></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route path="/Blogs" element={<Blog></Blog>}></Route>
        <Route path="/Chekout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
