import React from "react";
import styled from "styled-components";

const ContainerEtapa2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
` 


class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerEtapa2>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5. Qual curso? </p>
                <input type='text'></input>
                <p>6. Qual a unidade de ensino?</p>
                <input type='text'></input>

            </ContainerEtapa2>
        );
    }

}
export default Etapa2;
