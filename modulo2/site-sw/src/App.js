import React, {useState} from "react";
import { CharacterDetailPage } from "./CharacterDetailPage/CharacterDetailPage";
import { CharacterListPage } from "./CharacterListPage/CharacterListPage";

export default function App() {
  
  const [currentPage, setCurrentPage] = useState( "list")

  const selectPage = () => {
    if (this.state.currentPage === "characterDetailPage") {
      return <CharacterDetailPage />;
    } else if (this.state.currentPage === "characterListPage") {
      return <CharacterListPage />;
    }
  };
  return (
    <div>
      {selectPage()}
    </div>
    
  )
}
