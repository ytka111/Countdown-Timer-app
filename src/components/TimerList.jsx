import React from "react";
import { TimerItem } from "./TimerItem";

export const TimerList = ({ timers, remove, stop, edit }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List of Timers</h1>
      {timers.map((timer, index) => (
        <TimerItem
          remove={remove}
          stop={stop}
          edit={edit}
          number={index + 1}
          timer={timer}
          key={timer.id}
        />
      ))}
    </div>
  );
};
