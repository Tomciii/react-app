import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import WordTable from "../../components/WordTable/WordTable";
import "./style.css";

const Dictionary = () => (
 <div data-testid="Dictionary">
     <Navbar></Navbar>
     <div className={"table"}>
         <WordTable></WordTable>
     </div>
 </div>
);

Dictionary.propTypes = {};

Dictionary.defaultProps = {};

export default Dictionary;
