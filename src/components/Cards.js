import React from "react";
import { useState, useEffect } from "react";

const Cards = (props) => {
  const { name, job, image, text } = props.obj;

  return (
    <>
      <article>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">"</span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </article>
    </>
  );
};

export default Cards;
