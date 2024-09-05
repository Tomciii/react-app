import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Link} from "react-router-dom";
import './style.css';

const Home = () => (
 <div data-testid="Home">
     <Navbar></Navbar>
         <div className={"flex justify-center mt-20"}>
             <Link to="/flashcards"><button className={"big-btn mr-20"}>Flashcards</button></Link>
             <Link to="/dictionary"><button className={"big-btn"}>Dictionary</button></Link>
         </div>
 </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
