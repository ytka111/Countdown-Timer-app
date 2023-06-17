import React, { useState } from "react";

export const TimerForm = ({ create }) => {
  const [timer, setTimer] = useState({
    name: "",
    timeInSeconds: 0,
    duration: 0,
    isRunning: true,
  });
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const addNewTimer = (e) => {
    e.preventDefault();
    const totalSeconds = hours * 3600 + minutes * 60 + seconds * 1;
    if (!timer.name) return;
    const newTimer = {
      ...timer,
      timeInSeconds: totalSeconds,
      duration: totalSeconds,
      id: Date.now(),
    };
    create(newTimer);
    setTimer({ name: "", timeInSeconds: 0, isRunning: true });
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <form className="form">
      <input
        className="name-input"
        type="text"
        placeholder="Event name"
        value={timer.name}
        onChange={(e) => setTimer({ ...timer, name: e.target.value })}
      ></input>

      <input
        type="number"
        value={hours}
        onChange={(e) => {
          e.target.value >= 0 && e.target.value < 24
            ? setHours(e.target.value)
            : 0;
        }}
      ></input>
      <span>Hour</span>

      <input
        type="number"
        value={minutes}
        onChange={(e) => {
          e.target.value >= 0 && e.target.value < 60
            ? setMinutes(e.target.value)
            : 0;
        }}
      ></input>
      <span>Min</span>

      <input
        type="number"
        value={seconds}
        onChange={(e) => {
          e.target.value >= 0 && e.target.value < 60
            ? setSeconds(e.target.value)
            : 0;
        }}
      ></input>
      <span>Sec</span>
      <button onClick={addNewTimer}>Start timer</button>
    </form>
  );
};
