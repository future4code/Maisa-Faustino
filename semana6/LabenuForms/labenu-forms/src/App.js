import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
  margin: 10px;
}
` 


class App extends React.Component {
  render(){
    return(
      <AppContainer>
        <Etapa1/>
          <button>Próxima Etapa</button>
        <Etapa2/>
          <button>Próxima Etapa</button>


      </AppContainer>

    );
  }
}

export default App;
