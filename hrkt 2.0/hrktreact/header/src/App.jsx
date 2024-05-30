import PropTypes from "prop-types";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("saunak 2");

  function updatetitle() {
    setTitle("my name is " + Math.random() * 100);
  }

  return (
    <>
      <button onClick={updatetitle}>click me to change the title</button>
      <Header title={"saunak 1"} />
      <Header title={title} />
      <Header title={"saunak 3"} />
    </>
  );
}

function Header({ title }) {
  useState(() => {
    console.log("title is ", title);
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
