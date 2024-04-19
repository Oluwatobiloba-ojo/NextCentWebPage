import Footer from "../reusuable/Footer";
import Navbar from "../reusuable/Navbar";
import {Outlet} from "react-router-dom"


const Layout = ()=>{
    return(
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
    );
}

export default Layout;
