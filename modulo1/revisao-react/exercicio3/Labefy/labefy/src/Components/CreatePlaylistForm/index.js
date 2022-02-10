import React from "react";
import styled from "styled-components";


export const CreatePlaylistFormContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const PlaylistCreationForm = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

 export class CreatePlaylistForm extends React.Component {
  state = {

   }
  render () {
    return(
      <CreatePlaylistFormContainer>
          <PlaylistCreationForm>
            <label>Criar Playlist</label>
            <input
            placeholder="Nome da Playlist"/>
            <button>Criar Playlist</button>
          </PlaylistCreationForm>
      </CreatePlaylistFormContainer>
    )

  }
}
