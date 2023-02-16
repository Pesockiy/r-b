import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  createRef,
  useTransition,
  createContext,
} from "react";
import { gsap } from "gsap";

import { Button } from "react-bootstrap";

// const txt = "Hello ebat!".split("");
const txt = "Hello Wrld!".split("");

const Main = () => {
  const btnRef = useRef([]);

  const ar = [];

  for (let i = 0; i < txt.length; i++) {
    ar.push(
      <span key={i} ref={(el) => (btnRef.current[i] = el)}>
        {txt[i]}
      </span>
    );
  }

  useLayoutEffect(() => {
    for (let i = 0; i < btnRef.current.length; i++) {
      const h = btnRef.current[btnRef.current.length - 1].clientHeight * .8;

      gsap.to(btnRef.current[i], {
        color: "rgb(" + (4 * i) / 2 + "," +  i * 1 + "," + (10 * i / 3) / 4+ ")",
        duration: 0.1 * i,
        delay: 0,
      });
      gsap.to(btnRef.current[i], {
        x: 100 * `1.${i}`,
        duration: 0.5,
        delay: 0.5,
      });
      gsap.to(btnRef.current[i], { x: 200, duration: 0.5, delay: 1 });
      gsap.to(btnRef.current[btnRef.current.length - 1], {
        y: -h,
        duration: 0.1,
        delay: 1,
      });
      gsap.to(btnRef.current[btnRef.current.length - 1], {
        y: 0,
        duration: 0.35,
        delay: 1.3,
      });
      gsap.to(btnRef.current[i], {
        x: 0,
        duration: 0.75,
        delay: 1.9,
      });
      gsap.to(btnRef.current[i], {
        color: "rgb(" + (10 * i) / 3 + "," + 10 * i + "," + 20 * i + ")",
        duration: 0.1 * i,
        delay: 1.9,
      });
      // gsap.to(btnRef.current[i], {
      //   x: 100 * `1.${i}`,
      //   duration: 0.5,
      //   delay: 0.5,
      // });
      // gsap.to(btnRef.current[i], { x: 200, duration: 0.5, delay: 1.5 });
      // gsap.to(btnRef.current[btnRef.current.length - 1], {
      //   y: -20,
      //   duration: 0.1,
      //   delay: 1.5,
      // });
      // gsap.to(btnRef.current[btnRef.current.length - 1], {
      //   y: 0,
      //   duration: 0.25,
      //   delay: 2.5,
      // });
      // gsap.to(btnRef.current[i], {
      //   x: 0,
      //   duration: 0.75,
      //   delay: 2.9,
      // });
    }
  }, []);

  return (
    <>
      <h1 className="fd">{ar}</h1>
    </>
  );
};

export default Main;
