import { useEffect, useState } from "react";
import iconDice from "../images/icon-dice.svg";
import patternDividerDesktop from "../images/pattern-divider-desktop.svg";
import patternDividerMobile from "../images/pattern-divider-mobile.svg";

import styles from "./Advice.module.css";

function Advice() {
  const [slip, setSlip] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      redirect: "follow",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setSlip(data.slip);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerAdvice}>
        <h5>ADVICE # {!loading ? "" : slip.id} </h5>
        <p key={slip.id}>{slip.advice}</p>
        <img
          className={styles.patternDividerDesktop}
          src={patternDividerDesktop}
          alt="pattern divider"
        ></img>
        <img
          className={styles.patternDividerMobile}
          src={patternDividerMobile}
          alt="pattern divider"
        ></img>
        <button
          className={styles.iconDice}
          onClick={() => {
            fetchAdvice();
          }}
        >
          <img src={iconDice} alt="Icon dice"></img>
        </button>
      </div>
      <p className={styles.attribution}>Challenge by <a href="https://www.frontendmentor.io" target="_blank">Frontend Mentor</a>.</p>
    </div>
  );
}

export default Advice;
