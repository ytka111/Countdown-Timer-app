import React, { useEffect, useState } from "react";
import { TimerForm } from "./components/TimerForm";
import { TimerList } from "./components/TimerList";
import "./App.css";

function App() {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const savedTimers = JSON.parse(localStorage.getItem("timers"));
    if (savedTimers) {
      setTimers(savedTimers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers
          .map((timer) => {
            if (timer.timeInSeconds === 0) {
              alert(`${timer.id}. ${timer.name} time is over!`);
            }
            if (timer.isRunning && timer.timeInSeconds > -1) {
              return { ...timer, timeInSeconds: timer.timeInSeconds - 1 };
            }
            return timer;
          })
          .filter((timer) => timer.timeInSeconds !== -1)
      );
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const createTimer = (newTimer) => {
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (timer) => {
    setTimers(timers.filter((p) => p.id !== timer.id));
  };

  const stopTimer = (p) => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === p.id) {
          return { ...timer, isRunning: !p.isRunning };
        }
        return timer;
      })
    );
  };

  const editTimer = (p, newTime, newName) => {
    if (!newName) return;
    if (newTime < 0) return;
    setTimers(
      timers.map((timer) => {
        if (timer.id === p.id) {
          return {
            ...timer,
            name: newName,
            timeInSeconds: newTime,
            isRunning: true,
          };
        }
        return timer;
      })
    );
  };

  return (
    <div className="App">
      <TimerForm create={createTimer} />
      {timers.length !== 0 ? (
        <TimerList
          timers={timers}
          remove={removeTimer}
          stop={stopTimer}
          edit={editTimer}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>No Timers</h1>
      )}
    </div>
  );
}

export default App;
