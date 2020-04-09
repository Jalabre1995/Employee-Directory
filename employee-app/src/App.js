import React from 'react';
import Main from "./components/Main/Main.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header.js";


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
