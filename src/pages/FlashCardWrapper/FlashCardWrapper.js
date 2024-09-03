import React, {useState} from 'react';
import FlashCard from "../../components/FlashCard/FlashCard";
import Navbar from "../../components/Navbar/Navbar";

const wordList = [
 { word: "Tisch", translatedWord: "Table" },
 { word: "Stuhl", translatedWord: "Chair" },
 { word: "Buch", translatedWord: "Book" }
];

const FlashCardWrapper = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
 };


 const handlePrevious = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + wordList.length) % wordList.length);
 };

 return (
     <div>
      <Navbar></Navbar>
       <div className={"flex"}>
       <FlashCard wordPair={wordList[currentIndex]}></FlashCard>
        <div>
         <button onClick={handlePrevious} className={"mr-20"}>Previous</button>
         <button onClick={handleNext}>Next</button>
        </div>
   </div>
     </div>
 );
};

FlashCardWrapper.propTypes = {};

FlashCardWrapper.defaultProps = {};

export default FlashCardWrapper;
