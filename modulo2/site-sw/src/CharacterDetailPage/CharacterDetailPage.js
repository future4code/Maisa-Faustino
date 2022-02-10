import React, {useState} from "react";
import { CharacterDetailPage } from "./styled";
import { CharacterListPage } from "../CharacterListPage/CharacterListPage";

export default function CharacterDetailPage() {
  const [currentPage, setCurrentPage] = useState("list");

  const selectPage = () => {
    if (this.state.currentPage === "characterDetailPage") {
      return <CharacterDetailPage />;
    } else if (this.state.currentPage === "characterListPage") {
      return <CharacterListPage />;
    }
  };
  return <div>Detalhes dos Personagens</div>;
}
