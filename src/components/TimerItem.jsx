import React, { useState } from "react";
import { MdOutlineModeEdit, MdDeleteOutline, MdPause } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";

export const TimerItem = (props) => {
  const [editName, setEditName] = useState(props.timer.name);
  const [hoursEdit, setHours] = useState(0);
  const [minutesEdit, setMinutes] = useState(0);
  const [secondsEdit, setSeconds] = useState(0);

  const hours = Math.floor(props.timer.timeInSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((props.timer.timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (props.timer.timeInSeconds % 60).toString().padStart(2, "0");

  return (
    <div className="timer">
      <div className="timer__content">
        <h1>
          {props.number}. {props.timer.name}{" "}
          {`${Math.floor(props.timer.duration / 3600)
            .toString()
            .padStart(2, "0")}:${Math.floor((props.timer.duration % 3600) / 60)
            .toString()
            .padStart(2, "0")}:${(props.timer.duration % 60)
            .toString()
            .padStart(2, "0")}`}
        </h1>
        <div className="timer__time">
          {`${hours}`}
          <span>Hour</span>
          {`${minutes}`}
          <span>Min</span>
          {`${seconds}`}
          <span>Sec</span>
        </div>
        <div className="timer__btns">
          <button onClick={() => props.stop(props.timer)}>
            {props.timer.isRunning ? (
              <MdPause size={25} />
            ) : (
              <VscDebugStart size={25} />
            )}
          </button>
          <button onClick={() => props.remove(props.timer)}>
            <MdDeleteOutline size={25} />
          </button>
          <button
            onClick={() =>
              props.edit(
                props.timer,
                hoursEdit * 3600 + minutesEdit * 60 + secondsEdit * 1,
                editName
              )
            }
          >
            <MdOutlineModeEdit size={25} />
          </button>
        </div>
        <div className="timer__edit">
          <input
            className="name-input"
            type="string"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          ></input>
          <input
            className="time-input"
            type="number"
            value={hoursEdit}
            onChange={(e) => {
              e.target.value >= 0 && e.target.value < 24
                ? setHours(e.target.value)
                : 0;
            }}
          ></input>
          <span>h.</span>
          <input
            className="time-input"
            type="number"
            value={minutesEdit}
            onChange={(e) => {
              e.target.value >= 0 && e.target.value < 60
                ? setMinutes(e.target.value)
                : 0;
            }}
          ></input>
          <span>m.</span>
          <input
            className="time-input"
            type="number"
            value={secondsEdit}
            onChange={(e) => {
              e.target.value >= 0 && e.target.value < 60
                ? setSeconds(e.target.value)
                : 0;
            }}
          ></input>
          <span>s.</span>
        </div>
      </div>
    </div>
  );
};
