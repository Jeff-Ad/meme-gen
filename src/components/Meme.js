import React from "react";
// import memeData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    buttomText: "",
    randomImage: "https://i.imgflip.com/40b1gx.jpg",
  });
  const [allMeme, setAllMeme] = React.useState([]);
  const [isGoingOut, setIsGoingOut] = React.useState(false);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  function handleChange() {
    // const memesArr = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const { url } = allMeme[randomNumber];
    setMeme((preMeme) => {
      return {
        ...preMeme,
        randomImage: url,
      };
    });
  }
  function handleClick(event) {
    setMeme((preMeme) => {
      const { name, value } = event.target;
      return {
        ...preMeme,
        [name]: value,
      };
    });
  }
  function ans() {
    setIsGoingOut((preState) => !preState);
  }
  // const isGoingout = false;
  // let answer = isGoingout === true ? "Yes" : "No";
  // console.log(answer);

  // let answer
  // (isGoingOut===true)
  return (
    <main className="form">
      <form>
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleClick}
          placeholder="Shut up"
          id=""
        />
        <input
          type="text"
          name="buttomText"
          value={meme.buttomText}
          onChange={handleClick}
          id=""
          placeholder="and take my money"
        />
      </form>
      <button onClick={handleChange} type="button" className="btn">
        Get a new meme image 🖼
      </button>
      <div className="ImUrl">
        <img src={meme.randomImage} alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.buttomText}</h2>
      </div>
      <div>
        <button onClick={ans}>change state</button>
        {isGoingOut ? "Yes" : "No"}
      </div>
    </main>
  );
}
