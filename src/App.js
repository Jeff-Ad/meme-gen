import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
// import Chal from "./components/Chal";
// import memes from "./memesData";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Challenge from "./components/Challenge";
// import Formm from "./components/Forms";
// import Signup from "./components/Signup";
function App() {
  // const [user, setUser] = React.useState("Jeff");

  // const data = memes.map((items) => {
  // return <Meme key={items.id} items={items} />;
  // });
  return (
    <div className="App">
      <Navbar />
      {/* <Signup />
      <Challenge />
      <Formm /> */}
      <Meme />
      {/* <Chal /> */}
      {/* <Header user={user} />
      <Body user={user} darkMode={false} /> */}
    </div>
  );
}

export default App;
