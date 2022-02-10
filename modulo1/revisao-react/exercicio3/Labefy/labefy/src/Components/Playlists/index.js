import React from "react";
import styled from "styled-components";
import { PlaylistCard } from "../PlaylistCard";

export const PlaylistContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`
export class Playlists extends React.Component{
    state = {
        playlist : [
            {
                "id": "6a1fae1c-3988-44ad-aa44-3d38e8bd23b6",
                "name": "string"
            },
            {
                "id": "a6ceef60-4f35-41ff-8498-27dbf551acdc",
                "name": "sertanejo"
            },
            {
                "id": "52268464-c083-4f5c-8bd1-e643f39e9c8f",
                "name": "internacional"
            },
        ]

    }
    render(){
        const playlist = this.state.playlist.map(playlist => {
            return <PlaylistCard 
            key={playlist.id}
            changePage={this.props.changePage}
            name={playlist.name}
            
            />
        })
        return(
            <PlaylistContainer>
                {playlist}
            </PlaylistContainer>
        )
    }
}