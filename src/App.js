import React from "react";
import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import reviews from "./data";
import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState(reviews);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(data[0]);

  const prevUser = () => {
    var ind = index + 1;

    if (ind == data.length) {
      ind = 0;
    }

    setIndex(ind);
    setCurrent(data[index]);
  };

  const nextUser = () => {
    console.log("Pressed");
    var ind = index - 1;

    if (ind < 0) {
      ind = data.length - 1;
    }

    setIndex(ind);
    setCurrent(data[index]);
  };

  const randomUser = () => {
    setIndex(Math.floor(Math.random() * data.length));

    setCurrent(data[index]);
  };

  return (
    <div className="main-box">
      <h1 className="title">Our Reviews</h1>
      <div className="underline"></div>

      <div className="container">
        <div className="review">
          <Cards obj={current} />
          <div className="button-container">
            <button
              className="prev-btn"
              onClick={() => {
                prevUser();
              }}
            >
              &lt;
            </button>
            <button
              className="next-btn"
              onClick={() => {
                nextUser();
              }}
            >
              &gt;
            </button>
          </div>
          <button
            className="random-btn"
            onClick={() => {
              randomUser();
            }}
          >
            surprise me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
