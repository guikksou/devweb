import React, { useState, useEffect } from 'react';

// Structure imposée par le TP (Section 7.1 - point 2)
interface FlashcardProps {
  question: string;
  answer: string;
}

export default function Flashcard({ question, answer }: FlashcardProps) {
  // État local pour savoir si la carte est retournée ou non
  const [showAnswer, setShowAnswer] = useState(false);

  // Remet la carte côté "Question" si la question change (navigation)
  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <div 
      style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        borderRadius: '8px', 
        margin: '20px auto', 
        width: '300px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: showAnswer ? '#f0f8ff' : '#fff', // Change de couleur si réponse
        cursor: 'pointer'
      }}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <h3>{showAnswer ? "Réponse :" : "Question :"}</h3>
      <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
        {showAnswer ? answer : question}
      </p>
      
      <button 
        style={{ marginTop: '20px', padding: '5px 10px' }}
        onClick={(e) => {
          e.stopPropagation(); // Évite de déclencher le click du div parent
          setShowAnswer(!showAnswer);
        }}
      >
        Flip
      </button>
    </div>
  );
}