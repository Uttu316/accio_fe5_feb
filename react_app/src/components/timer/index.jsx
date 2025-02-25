import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);
  const headingRef = useRef(null);

  useEffect(function () {
    console.log("Mounted");

    // onStart()
    return () => {
      //cleanup function: unmount function
      clearInterval(intervalId.current);
    };
  }, []);

  const onStart = () => {
    intervalId.current = setInterval(() => {
      console.log("Timer Working");
      setTime((time) => time + 1);
    }, 1000);
  };

  const onPause = useCallback(() => {
    clearInterval(intervalId.current);
  }, []);
  const onReset = useCallback(() => {
    clearInterval(intervalId.current);

    setTime(0);
  }, []);

  const getTime = useCallback(() => {
    let mintues = parseInt(time / 60);
    let seconds = time % 60;
    return `${mintues}:${seconds}`;
  }, [time]);

  let visibleTime = useMemo(() => {
    if (time == 3) {
      let el = headingRef.current;
      el.style.color = "Red";
    }
    return getTime();
  }, [time]);

  console.log("Rendered", time);
  return (
    <div>
      <h2>Stop Watch</h2>
      <h3 ref={headingRef}>{visibleTime}</h3>
      <button onClick={onStart}>Start</button>
      {!!time && (
        <>
          <button onClick={onPause}>Pause</button>
          <button onClick={onReset}>Reset</button>
        </>
      )}
    </div>
  );
};
export default Timer;
