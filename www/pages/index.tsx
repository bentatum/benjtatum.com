import React, { useEffect, useState } from "react";
import Head from "../components/head";
import TwitterIcon from "../components/twitter-icon";
import GithubIcon from "../components/github-icon";
import ClincIcon from "../components/clinc-icon";
import theme from "../lib/theme";
import { cx } from "emotion";

type Position = {
  top: number;
  left: number;
};

const Home = () => {
  const [dotPosition, setDotPosition] = useState<Position>({ top: 0, left: 0 });
  const [dotOutlinePosition, setDotOutlinePosition] = useState<Position>({
    top: 0,
    left: 0
  });
  const [cursorVisible, setCursorVisible] = useState<boolean>(false);
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const delay = 8;
  let endX: number = 0;
  let endY: number = 0;
  let outlineX: number = 0;
  let outlineY: number = 0;

  function animateDotOutline() {
    outlineX += (endX - outlineX) / delay;
    outlineY += (endY - outlineY) / delay;
    setDotOutlinePosition({
      left: outlineX,
      top: outlineY
    });
    requestAnimationFrame(animateDotOutline);
  }

  useEffect(() => {
    endX = window.innerWidth / 2;
    endY = window.innerHeight / 2;

    function setupEventListeners() {
      document.addEventListener("mousemove", event => {
        endX = event.pageX;
        endY = event.pageY;
        const position = {
          top: endY,
          left: endX
        };
        setDotPosition(position);
        setDotOutlinePosition(position);
      });
      document.addEventListener("mouseenter", event => {
        setCursorVisible(true);
        const position = {
          top: event.pageY,
          left: event.pageX
        };
        setDotPosition(position);
        setDotOutlinePosition(position);
      });
      document.addEventListener("mouseleave", event => {
        const position = {
          top: event.pageY,
          left: event.pageX
        };
        setDotPosition(position);
        setDotOutlinePosition(position);
        setCursorVisible(false);
      });
      document.addEventListener("mousedown", event => {
        console.log('ok')
        setMouseDown(true)
      })
      document.addEventListener("mouseup", event => {
        setMouseDown(false)
      })
    }

    setupEventListeners();
    animateDotOutline();
  }, []);

  return (
    <div className="home">
      <Head title="Ben Tatum | Software Developer | Ann Arbor, Michigan" />

      <div
        className={cx({
          "cursor-dot-outline": true,
          "cursor-dot-outline--clicked": mouseDown
        })}
        style={{
          ...dotOutlinePosition,
          opacity: cursorVisible ? 0.5 : 0
        }}
      />
      <div
        className="cursor-dot"
        style={{
          ...dotPosition,
          opacity: cursorVisible ? 1 : 0
        }}
      />

      <div className="title-vail" />
      <div className="title-wrap">
        <h1>
          <span className="title-wrap__top">{Array(100).fill("Ben").join(' ')}</span>
          <br />
          <span className="title-wrap__bottom">{Array(100).fill("Tatum").join(' ')}</span>
        </h1>
      </div>

      <nav className="nav">
        <a href="https://clinc.com" target="_blank">
          <ClincIcon />
        </a>
        <a href="https://github.com/bentatum" target="__blank">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/benjtatum" target="__blank">
          <TwitterIcon />
        </a>
      </nav>

      <style jsx>{`
        .cursor-dot,
        .cursor-dot-outline {
          z-index: 2;
          pointer-events: none;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .cursor-dot {
          --size: 8px;
          width: var(--size);
          height: var(--size);
          background-color: orange;
        }

        .cursor-dot-outline {
          --size: 20px;
          width: var(--size);
          height: var(--size);
          background-color: orange;
          transition-property: width, height;
          transition-timing: 0.2s;
          transition-timing-function: ease;
        }

        .cursor-dot-outline--clicked {
          --size: 50px;
          width: var(--size);
          height: var(--size);
        }

        .home {
          cursor: none;
          height: 100vh;
          background-color: black;
          color: white;
          font-family: "Heebo", sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow-y: hidden;
        }

        .home h1 {
          margin: 0;
          font-size: 5rem;
          white-space: nowrap;
        }

        .title-wrap {
          max-width: 100%;
          overflow: hidden;
        }

        .title-wrap__top {
          position: relative;
          left: -10%;
        }

        .title-wrap__bottom {
          position: relative;
          left: -13%;
        }

        .title-vail {
          background: radial-gradient(transparent, black);
          height: 100vh;
          position: absolute;
          z-index: 1;
          width: 100%;
        }

        nav {
          z-index: 3;
          position: absolute;
          bottom: 0;
          padding: ${theme.space.lg}px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        nav a {
          cursor: none;
          padding: ${theme.space.md}px;
          color: white;
        }
        nav a:hover {
          color: orange;
        }
      `}</style>
    </div>
  );
};

export default Home;
