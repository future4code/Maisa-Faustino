import React, { Component } from "react";
import styled from "styled-components";
import { CreatePlaylistForm } from "./Components/CreatePlaylistForm";
import { Header } from "./Components/Header";
import { PlaylistManagerPage } from "./Components/PlaylistManagerPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    currentPage: "playlistManagerPage",
  };
  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };
  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "createPlaylistForm") {
        return <CreatePlaylistForm />;
      } else if (this.state.currentPage === "playlistManagerPage") {
        return <PlaylistManagerPage />;
      }
    };
    return (
      <AppContainer>
        <Header changePage={this.changePage} />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;
