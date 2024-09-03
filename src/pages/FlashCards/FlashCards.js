import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {flashCardSets} from "../../model/flashCards";
import {Link} from "react-router-dom";

const flashCardList = flashCardSets;

const FlashCards = () => (
 <div data-testid="FlashCards">
     <Navbar></Navbar>
     <div className={"flex justify-center mt-20"}>
         {flashCardList.map(flashCardItem => <Link to={"/flashcards/" + flashCardItem.id + "/0"}><button className={"small-btn mr-20"}>{flashCardItem.title}</button></Link>)}
     </div>
 </div>
);

FlashCards.propTypes = {};

FlashCards.defaultProps = {};

export default FlashCards;
