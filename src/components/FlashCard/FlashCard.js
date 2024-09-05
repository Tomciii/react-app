import React from 'react';
import './FlashCard.css';

const FlashCard = ({wordPair, showMe, setShowMe}) => {
   return (
       <button className={"flashcard flex justify-center"} onClick={() => {
           setShowMe(true)
       }}>

       <div >
           <p id={"word"}>{wordPair.word}</p>
           {showMe? <div><hr className={"width-200"}/><p id={"translatedWord"}>{wordPair.translatedWord}</p></div> : <></>}
        </div>
</button>
    );
}

FlashCard.propTypes = {};

FlashCard.defaultProps = {};

export default FlashCard;
