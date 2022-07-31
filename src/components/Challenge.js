import React from "react";
import WindowTracker from "./WindowTracker";

export default function Challenge() {
  // const [messages, setMessages] = React.useState(["2", "2"]);
  //   function toggle() {
  //     setMessages((prevMess) =>{
  //    return prevMess === ''? "none" : prevMess,
  //     });
  //   }
  //   return (
  //     <div>
  //       {messages.length > 0 ? (
  //         <h1>
  //           You have {messages.length} unread message
  //           {messages.length === 1 ? "" : "s"}
  //         </h1>
  //       ) : (
  //         <h1>You are all caught up</h1>
  //       )}
  //     </div>
  //   );
  // }
  const [show, setShow] = React.useState(true);
  function handleClick() {
    setShow((prevState) => !prevState);
  }
  return (
    <div>
      <button onClick={handleClick}>
        {show === true
          ? "Toggle Close Windowtracker"
          : "Toggle Show Windowtracker"}
      </button>
      {show && <WindowTracker />}
    </div>
  );
}
