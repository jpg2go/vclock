import React from 'react';
import './FlipCard.css';

const FlipCard = ({ value, onFlip }) => {
  const [currentValue, setCurrentValue] = React.useState(value);
  const [isFlipping, setIsFlipping] = React.useState(false);

  React.useEffect(() => {
    if (value !== currentValue && !isFlipping) {
      setIsFlipping(true);
      
      setTimeout(() => {
        setCurrentValue(value);
        setIsFlipping(false);
        if (onFlip) onFlip();
      }, 350);
    }
  }, [value, currentValue, isFlipping, onFlip]);

  return (
    <div className="flip-card">
      <div className="top">{currentValue}</div>
      <div className="bottom">{currentValue}</div>
      {isFlipping && (
        <>
          <div className="top-flip">{currentValue}</div>
          <div className="bottom-flip">{value}</div>
        </>
      )}
    </div>
  );
};

export default FlipCard;