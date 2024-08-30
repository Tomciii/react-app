import React from 'react';
import './FlashCard.css';


function flipFlashCard() {
    const word = document.getElementById("word");
    const translatedWord = document.getElementById("translatedWord");

    if (word.style.display === "none") {
        word.style.display = "block";
        translatedWord.style.display = "none";
    } else {
        word.style.display = "none";
        translatedWord.style.display = "block";
    }
}

const FlashCard = ({wordPair}) => (
 <div className={"flashcard flex justify-center"}>
     <p id={"word"}>{wordPair.word}</p>
     <p id={"translatedWord"} className={"disabled"}>{wordPair.translatedWord}</p>
     <button onClick={flipFlashCard}>Flip</button>
 </div>
);

FlashCard.propTypes = {};

FlashCard.defaultProps = {};

export default FlashCard;
