import { useState } from "react";
import "./Card.css"; // For styling

const Card = ({ question, answer, difficulty, image }) => {
    const [flipped, setFlipped] = useState(false);
  
    return (
      <div className={`card ${difficulty} ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <div className="card-content">
          {flipped ? (
            <p className="answer">{answer}</p>
          ) : (
            <>
              <img src={image} alt="Card Front" className="card-image" />
              <p className="question">{question}</p>
            </>
          )}
        </div>
      </div>
    );
  };
  

export default Card;
