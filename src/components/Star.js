import React from "react";

export default function Start(props) {
  try {
    let starIcon = `${
      props.isFilled === true
        ? "./image/star-empty.png"
        : "./image/star-filled.png"
    }`;
    return (
      <div>
        <img
          src={starIcon}
          className="card--favorite"
          alt="star"
          onClick={props.handleClick}
        />
      </div>
    );
  } catch (error) {
    console.log("errrrorroro😀");
  }
}
