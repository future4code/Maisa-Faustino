import React from "react";
import styled from "styled-components";


export const PlaylistCardContainer = styled.div`
  background-color: lavenderblush;
  margin: 20px;
  display: flex;
  align-items: center;
`;
export const NameContainer = styled.p`
    margin: 10px;

`
export const DeleteButton = styled.p`
    margin: 10px;
    color: red;
`



export const PlaylistCard = (props) => {
  return(
    <PlaylistCardContainer>
        <NameContainer>{props.name}</NameContainer>
        <DeleteButton>X</DeleteButton>
        <button onClick={()=> props.changePage("playlistDetail")}>Abrir Detalhe da Playlist</button>
    </PlaylistCardContainer>
  )
}
