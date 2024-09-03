import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

const Navbar = () => (
 <div className={"background"}>
     <Link to={"/"}><button className={"background-none"}><p className={"pl-20 bold"}>Learning App</p></button></Link>
 </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
