import React from "react";
import boxData from "../boxData";
import Box from "./Box";
export default function Body(props) {
  const [squares, setSquares] = React.useState(boxData);
  function toggle(id) {
    setSquares((preSquares) => {
      return preSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
      // //created an empty array
      // const newSquares = [];
      // //loopping through the items of our boxData
      // for (let i = 0; i < preSquares.length; i++) {
      //   //assigning the items to the currentSquare variable
      //   const currentSquare = preSquares[i];
      //   //comaprison and updating our array of objects
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on,
      //     };
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(currentSquare);
      //   }
      // }
      // return newSquares;
    });
  }
  const squareElement = squares.map((square) => {
    //whenever you use the map method to create a dom element always use the key element.
    // props.darkmode
    return (
      <Box on={square.on} key={square.id} id={square.id} handleClick={toggle} />
    );
  });
  return (
    <main>
      {/* <div>
        <h1>Welcome back, {props.user}</h1>
        <h2>Boxes will go here</h2>
      </div> */}
      {squareElement}
    </main>
  );
}
