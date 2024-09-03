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

const [showMe, setShowMe] = useState(false);

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
 };


 const handlePrevious = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + wordList.length) % wordList.length);
 };

 return (
     <div>
      <Navbar></Navbar>
       <div className={"flex flex-column"}>

       <FlashCard wordPair={wordList[currentIndex]} showMe={showMe} setShowMe={setShowMe}></FlashCard>
           { showMe ? <div>
         <button onClick={handlePrevious} className={"hard small-btn mr-20"}>Hard</button>
         <button onClick={handleNext} className={"ok small-btn mr-20"}>Ok</button>
         <button onClick={handleNext} className={"small-btn easy"}>Easy</button>
        </div> : <></>}
   </div>
     </div>
 );
};

FlashCardWrapper.propTypes = {};

FlashCardWrapper.defaultProps = {};

export default FlashCardWrapper;
