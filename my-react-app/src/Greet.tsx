import "./Greet.css";

function Greet() {
  let name: string = "";
  if (name) {
    return (
      <h2 className="orangered">
        Assalamualaikum {name}, welcome to React from Greet Component!
      </h2>
    );
  } else {
    return (
      <h2 className="darkgreen">
        Assalamualaikum, welcome to React from Greet Component!
      </h2>
    );
  }
}

export default Greet;
