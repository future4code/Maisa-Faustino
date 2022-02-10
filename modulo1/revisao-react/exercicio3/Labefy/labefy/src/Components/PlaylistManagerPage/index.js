import React from "react";
import styled from "styled-components";
import { PlaylistDetail } from "../PlaylistDetail";
import { Playlists } from "../Playlists";

export const PlaylistManagerPageContainer = styled.div``;

export class PlaylistManagerPage extends React.Component {
  state = {
    currentPage: "playlistDetail",
  };
  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };
  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlists") {
        return <Playlists changePage={this.changePage}/>;
      } else if (this.state.currentPage === "playlistDetail") {
        return <PlaylistDetail changePage={this.changePage} />;
      }
    };
    return (
      <PlaylistManagerPageContainer changePage= {this.changePage}>
        {renderCurrentPage()}
      </PlaylistManagerPageContainer>
    );
  }
}
