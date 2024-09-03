import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Dictionary from "./pages/Dictionary/Dictionary";
import FlashCardWrapper from "./pages/FlashCardWrapper/FlashCardWrapper";
import FlashCards from "./pages/FlashCards/FlashCards";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                    <Route index element={<Home />} />
                <Route path="flashcards" element={<FlashCards />} />
                    <Route path="flashcards/:cardset/:word" element={<FlashCardWrapper />} />
                    <Route path="dictionary" element={<Dictionary />} />
                    <Route path="*" element={<Dictionary />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
