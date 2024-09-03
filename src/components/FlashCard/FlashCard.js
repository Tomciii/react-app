import React, {useState} from 'react';
import './FlashCard.css';

const FlashCard = ({wordPair}) => {
    const [showMe, setShowMe] = useState(false);

   return (
       <button className={"flashcard flex justify-center"} onClick={() => {
           setShowMe(true)
       }}>
       <div >
                <p id={"word"}>{wordPair.word}</p>
                {showMe? <p id={"translatedWord"}>{wordPair.translatedWord}</p> : <></>}
        </div>
</button>
    );
}

FlashCard.propTypes = {};

FlashCard.defaultProps = {};

export default FlashCard;
