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
  const [userGuess, setUserGuess] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null); // Track correctness
  const [currentStreak, setCurrentStreak] = useState(0); // Current streak counter
  const [longestStreak, setLongestStreak] = useState(0); // Longest streak counter

  // Function to get a random card index
  const getRandomCardIndex = () => {
    return Math.floor(Math.random() * triviaQuestions.length);
  };

  // Handle the next card button click (moves to the next sequential card)
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % triviaQuestions.length);
    setUserGuess("");
    setIsCorrect(null);
  };

  // Handle the previous card button click (moves to the next sequential card)
  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + triviaQuestions.length) % triviaQuestions.length); // Ensures looping back to last card
    setUserGuess("");
    setIsCorrect(null);
  };

  // Handle random card button click (selects a random card)
  const handleRandomCard = () => {
    setCurrentCardIndex(getRandomCardIndex());
    setUserGuess("");
    setIsCorrect(null);
  };

  const handleGuessSubmit = () => {
    if (userGuess.trim().toLowerCase() === triviaQuestions[currentCardIndex].answer.toLowerCase()) {
      setIsCorrect(true);
      setCurrentStreak((prevStreak) => {
        const newStreak = prevStreak + 1;
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
        return newStreak;
      });
    } else {
      setIsCorrect(false);
      setCurrentStreak(0); // Reset streak on incorrect guess
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Violetta Trivia</h1>
        <h2>How well do you know the show?</h2>
        <h2>Easy: Green, Hard: Red</h2>
        <h3>Number of cards: {triviaQuestions.length}</h3>
        <h3>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</h3>
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

      {/* Guessing Section */}
      <div className="guess-container">
        <label htmlFor="guessInput">Guess the answer here:</label>
        <input 
          id="guessInput"
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className={isCorrect === null ? "" : isCorrect ? "correct-guess" : "wrong-guess"} // Apply CSS class
        />
        <button onClick={handleGuessSubmit}>Submit Guess</button>
      </div>

      <div className="navigation-button-container">
        <button onClick={handlePreviousCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>

      <div className="random-button-container">
        <button onClick={handleRandomCard}>Random 🔀</button>
      </div>
    </div>
  );
};

export default App;
