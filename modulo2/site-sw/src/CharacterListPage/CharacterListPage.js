import React, {useState} from "react";
import { CharacterListPageContainer } from "./styled";
import { CharacterDetailPage } from "../CharacterDetailPage/CharacterDetailPage";

export default function CharacterListPage() {
  const [currentPage, setCurrentPage] = useState("list");

  const selectPage = () => {
    if (this.state.currentPage === "characterDetailPage") {
      return <CharacterDetailPage />;
    } else if (this.state.currentPage === "characterListPage") {
      return <CharacterListPage />;
    }
  };
  return (
    <div>
      <CharacterListPageContainer />
      {selectPage()};
    </div>
  );
}
