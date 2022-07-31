import React from "react";

export default function Box(props) {
  //   const [on, setOn] = React.useState(props.on);

  //   function boxClick() {
  //     setOn((prevOn) => {
  //       return !prevOn;
  //     });
  //   }

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.handleClick(props.id)}
    ></div>
  );
}
