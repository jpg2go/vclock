import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';
import './Clock.css';

const Clock = ({ is24Hour = false, hasFlipAnimation = true, userStatus = '' }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let ampm = '';

    if (!is24Hour) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
    }

    return {
      hours: hours < 10 ? (is24Hour ? `0${hours}` : `${hours}`) : `${hours}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      ampm
    };
  };

  const { hours, minutes, ampm } = formatTime(time);

  const shouldShowFlip = hasFlipAnimation && (userStatus === '' || userStatus.includes('PRO'));

  return (
    <div className="clock-container">
      <div className="line"></div>
      <div className="container">
        <div className="holder">
          {shouldShowFlip ? (
            <div className="flip-container">
              <FlipCard value={hours} />
            </div>
          ) : (
            <h1 className="time-display">{hours}</h1>
          )}
          {!is24Hour && <h2 className="ampm">{ampm}</h2>}
        </div>

        <div className="holder">
          {shouldShowFlip ? (
            <div className="flip-container">
              {minutes.length === 1 && <h1 className="hidden-zero">0</h1>}
              <FlipCard value={minutes} />
            </div>
          ) : (
            <h1 className="time-display">{minutes}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clock;