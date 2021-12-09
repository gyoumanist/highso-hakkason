import React from "react";

const App = () => {
  const onClickButton = () => alert();

  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentLadyStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
