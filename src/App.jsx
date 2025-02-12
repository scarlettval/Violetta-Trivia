import { useState } from "react";
import "./App.css";
import Card from "./Card";
import tomasImage from "./assets/tomas.jpg";
import buenosaires from "./assets/buenosaires.jpg";
import friends from "./assets/friends.jpg";
import ludmi from "./assets/ludmi.jpg";
import studio from "./assets/studio.jpg";
import shorth from "./assets/short-hair.jpg";
import tia from "./assets/tia.jpg";
import marotti from "./assets/marotti.jpg";
import oso from "./assets/oso.jpg";
import german from "./assets/german.jpg";

const App = () => {
  const triviaQuestions = [
    { question: "Who is Violetta's first love interest?", answer: "Tomas", difficulty:"easy", image: tomasImage },
    { question: "What is the name of Violetta's 2 best friends?", answer: "Francesca and Camila", difficulty:"easy", image: friends},
    { question: "Which city does Violetta live in?", answer: "Buenos Aires", difficulty:"easy", image: buenosaires },
    { question: "In what season does Violetta cut her hair?", answer: "Season 2", difficulty:"hard", image: shorth },
    { question: "What is the original name of On Beat Studio?", answer: "Studio 21", difficulty:"hard", image: studio },
    { question: "What does Ludmila see herself as?", answer: "Super Nova", difficulty:"easy", image: ludmi },
    { question: "What is Angie's biggest secret?", answer: "She is Violetta's aunt, her mom's sister", difficulty:"easy", image: tia },
    { question: "Who is the Producer of YouMix?", answer: "Marotti", difficulty:"hard", image: marotti },
    { question: "Who is 'El Oso Pardo'?", answer: "Braco", difficulty:"hard", image: oso },
    { question: "What is German's profession?", answer: "Architect", difficulty:"easy", image: german },
  ];

  // State to keep track of the current card index
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Function to get a random card index
  const getRandomCardIndex = () => {
    return Math.floor(Math.random() * triviaQuestions.length);
  };

// Handle the next card button click (moves to the next sequential card)
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      (prevIndex + 1) % triviaQuestions.length // Ensures looping back to first card
    );
  };

// Handle random card button click (selects a random card)
const handleRandomCard = () => {
  setCurrentCardIndex(getRandomCardIndex());
};

  return (
    <div className="App">
      <div className="header">
        <h1>Violetta Trivia</h1>
        <h2>How well do you know the show?</h2>
        <h2>Easy: Green, Hard: Red</h2>
        <h3>Number of cards: {triviaQuestions.length}</h3>
        <h4>by Scarlett Valencia Pulido</h4>
      </div>

      <div className="cards-container">
        {/* Display only the current card */}
        <Card 
          key={currentCardIndex}
          question={triviaQuestions[currentCardIndex].question}
          answer={triviaQuestions[currentCardIndex].answer}
          difficulty={triviaQuestions[currentCardIndex].difficulty} // Pass the difficulty prop
          image={triviaQuestions[currentCardIndex].image}


        />
      </div>

      <div className="next-button-container">
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;