import React from "react";

export default function Forms() {
  const styles = {
    marginLeft: "10px",
    marginTop: "10px",
  };
  const [names, setNames] = React.useState({
    firstName: "",
    lastName: "",
    Email: "",
    textarea: "",
    isFriendly: true,
    employment: "employment",
    favColor: "",
  });

  // console.log(names.favColor);
  function handleChange(event) {
    //output is triggered by the DOM element

    setNames((prevName) => {
      //destructuring event.target
      const { name, value, type, checked } = event.target;
      return {
        ...prevName,
        //computed properties => surround the key in square bracket
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    //preventing the default means it wont refresh our page
    event.preventDefault();
    console.log(names);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        id=""
        placeholder="First Name"
        onChange={handleChange}
        value={names.firstName}
      />
      <input
        type="text"
        name="lastName"
        id=""
        placeholder="Last Name"
        onChange={handleChange}
        value={names.lastName}
      />
      <input
        type="email"
        name="Email"
        id=""
        placeholder="Email"
        onChange={handleChange}
        value={names.Email}
      />
      <textarea
        name="textarea"
        id=""
        cols="23"
        rows=""
        value={names.textarea}
        onChange={handleChange}
        placeholder="Comments"
      />

      <input
        type="checkbox"
        name="isFriendly"
        id="isFriendly"
        checked={names.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are You friendly?</label>
      <br />
      <fieldset style={styles}>
        <legend>Current employmet status</legend>
        <input
          type="radio"
          name="employment"
          id="unemployed"
          value="unemployed"
          checked={names.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="part-time"
          value="part-time"
          //changed to boolean
          checked={names.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="full-time"
          value="full-time"
          checked={names.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <label htmlFor="favColor">What is your favorite color?</label>
      <select
        name="favColor"
        id="favColor"
        style={styles}
        value={names.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="indigo">Indigo</option>
        <option value="blue">Blue</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      {/* <input type="submit" value="Send" /> */}
      <button>Submit</button>
    </form>
  );
}
