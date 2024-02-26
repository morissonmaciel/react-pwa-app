import React from "react";
import { RootContainer } from "./App.styled";
import reactLogo from "./images/react-logo.svg";

function App() {
  return (
    <RootContainer>
      <h1>Hello, World!</h1>
      <img src={reactLogo} alt="" width={128} height={128} />
    </RootContainer>
  );
}

export default App;
