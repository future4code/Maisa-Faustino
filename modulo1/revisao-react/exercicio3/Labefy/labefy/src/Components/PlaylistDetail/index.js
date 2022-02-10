import React from "react";
import styled from "styled-components";

export const PlaylistDetailContainer = styled.div`

`

export class PlaylistDetail extends React.Component{
    state = {

    }
    render () {
        return(
            <PlaylistDetailContainer>
                <button onClick={()=> this.props.changePage("playlists")}>Voltar para Playlist</button>
            </PlaylistDetailContainer>
        )
    }
}