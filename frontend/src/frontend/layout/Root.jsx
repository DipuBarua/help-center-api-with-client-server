import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import Banner from "../pages/banner/banner";

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Abstract</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;