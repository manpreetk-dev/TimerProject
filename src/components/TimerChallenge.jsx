import { useState, useRef } from "react";
import ResultModal from "./ResultsModal";

//let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog=useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    //   dialog.current.showModal();
    dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
      <h2> {title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p ClassName="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running.." : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
