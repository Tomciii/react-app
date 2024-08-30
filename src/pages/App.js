import './App.css';
import FlashCardWrapper from "../components/FlashCardWrapper/FlashCardWrapper";
import Navbar from "../components/Navbar/Navbar";

function App() {
    const wordList = [
        { word: "Tisch", translatedWord: "Table" },
        { word: "Stuhl", translatedWord: "Chair" },
        { word: "Buch", translatedWord: "Book" }
    ];

  return (
    <div className={"flex"}>
        <Navbar></Navbar>
        <FlashCardWrapper wordList={wordList}></FlashCardWrapper>
    </div>
  );
}

export default App;
