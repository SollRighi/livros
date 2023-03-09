import Pesquisar from "../components/pesquisa";
import Titulo from "../components/titulo";
import "../App.css";
import { useEffect } from "react";
import api from "../service/api";

export default function PaginaListagemLivros() {
  useEffect(() => {
    api.get("/volumes", { params: { q: "ring" } });
  }, []);

  return (
    <div className="App">
      <Titulo />
      <Pesquisar />
    </div>
  );
}
