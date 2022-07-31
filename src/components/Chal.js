import React from "react";
// import Count from "./Count";
import Img1 from "./images/user.png";
import Star from "./Star";
// import Img2 from "./images/star-empty.png";
// import Img3 from "./images/star-filled.png";
export default function Chal() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });
  // let starIcon = `${
  //   contact.isFavorite === true
  //     ? "./image/star-empty.png"
  //     : "./image/star-filled.png"
  // }`;
  function toggleFavorite() {
    setContact((preContent) => {
      return {
        ...preContent,
        isFavorite: !preContent.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src={Img1} className="card--image" alt="user" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

/*

export default function Chal() {
  function greeting(name) {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else if (hours === 17 && hours < 21) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }
    return ` Good ${timeOfDay} ${name}`;
  }
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);
  const thingsElements = things.map((thing) => <h4 key={thing}>{thing}</h4>);

  function click() {
    //determine what the text of the newthing is
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
    // Dont ever modify your thimgs array directly
    // thingsArray.push(newThingText);
    // console.log(thingsArray);
  }

  return (
    <div>
      <button onClick={click}>Add Items</button>
      {thingsElements}
      <h2>{greeting(" Jeff")}</h2>
    </div>
  );
}
*/
// export default function Chal() {
//   //the method
//   const [result, setResult] = React.useState(0);
//   function clickA() {
//     setResult((count) => {
//       return count + 1;
//     });
//   }
//   function clickM() {
//     setResult((count) => {
//       return count - 1;
//     });
//   }

//   return (
//     <div>
//       <h1>Is state imp to know</h1>
//       <div>
//         <button onClick={clickM}>Minus</button>
//         <Count number={result} />
//         <button onClick={clickA}>Add</button>
//       </div>
//     </div>
//   );
// }
