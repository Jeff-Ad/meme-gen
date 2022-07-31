import React from "react";
export default function Signup() {
  const [starWarsData, setStarWarData] = React.useState({});
  const [counter, setCounter] = React.useState(1);
  //side Effect
  console.log("comp");
  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${counter}`)
      .then((res) => res.json())
      .then((data) => setStarWarData(data));
    console.log("Effect function ran");
  }, [counter]);
  // function mK() {
  //   setCounter((preCount) => preCount + 1);
  // }
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h1>the counter is {counter}</h1>
      {/* <button onClick={mK}>ADD</button> */}
      <button onClick={() => setCounter((preCount) => preCount + 1)}>
        Get Next Character
      </button>
    </div>
  );
}
//   const [inputData, setInputData] = React.useState({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     newslet: true,
//   });

//   function handleChange(event) {
//     setInputData((prevData) => {
//       //target represent the element that was modified in the event
//       const { name, value, type, checked } = event.target;
//       return {
//         ...prevData,
//         [name]: type === "checked" ? checked : value,
//       };
//     });
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (inputData.passwordConfirm === inputData.password) {
//       console.log("Successful");
//     } else {
//       console.log("password does not match");
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="email"
//         id=""
//         placeholder="Email"
//         value={inputData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         id=""
//         placeholder="Password"
//         value={inputData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="passwordConfirm"
//         id=""
//         value={inputData.passwordConfirm}
//         placeholder="Confirm Password"
//         onChange={handleChange}
//       />

//       <input
//         type="checkbox"
//         name="newslet"
//         id="newslet"
//         checked={inputData.checkbox}
//       />
//       <label htmlFor="newslet">I want to join the newsletter</label>
//       <br />
//       <button>Sign up</button>
//     </form>
//   );
// }
