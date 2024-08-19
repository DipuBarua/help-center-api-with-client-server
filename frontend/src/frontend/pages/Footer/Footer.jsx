import { CgAbstract } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-black text-white py-10 px-20">

            <nav>
                <h6 className="footer-title">Abstract</h6>
                <Link to={""} className="link link-hover">Branches</Link>
            </nav>

            <nav>
                <h6 className="footer-title">Resources</h6>
                <Link to={""} className="link link-hover">Blog</Link>
                <Link to={""} className="link link-hover">Help Center</Link>
                <Link to={""} className="link link-hover">Release Notes</Link>
                <Link to={""} className="link link-hover">Status</Link>
            </nav>

            <nav>
                <h6 className="footer-title">Community</h6>
                <Link to={""} className="link link-hover">Twitter</Link>
                <Link to={""} className="link link-hover">LinkedIn</Link>
                <Link to={""} className="link link-hover">Facebook</Link>
                <Link to={""} className="link link-hover">Dribbble</Link>
                <Link to={""} className="link link-hover">Podcast</Link>
            </nav>

            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to={""} className="link link-hover">About Us</Link>
                <Link to={""} className="link link-hover">Careers</Link>
                <Link to={""} className="link link-hover">Legal</Link>

                <div className=" py-2">
                    <h6 className="footer-title">Contact Us</h6>
                    <a href="">info@abstract.com</a>
                </div>
            </nav>


            <aside>
                <p className=" pt-24">
                    <div className=" text-2xl ">
                        <CgAbstract className=" bg-white text-black rounded-md" />
                    </div>
                    &#169; Copyright 2022
                    <br />
                    Abstract Studio Design, Inc.
                    <br />
                    All rights reserved
                </p>
            </aside>

        </footer>
    );
};

export default Footer;