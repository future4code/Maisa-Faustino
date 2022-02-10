import React from "react";
import styled from "styled-components";


export const HeaderContainer = styled.div`
  background-color: lavenderblush;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
`


export const Header = (props) => {
  return(
    <HeaderContainer>
      <h1>Labefy</h1>
      <ButtonContainer>
        <button onClick={() => props.changePage("createPlaylistForm")}>Criar Playlist</button>
        <button onClick={() => props.changePage("playlistManagerPage")}>Ver Playlist</button>  
      </ButtonContainer>
    </HeaderContainer>
  )
}
