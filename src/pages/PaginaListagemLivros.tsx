import Pesquisar from "../components/pesquisa";
import Titulo from "../components/titulo";
import "../App.css";
import { useEffect } from "react";
import api from "../service/api";

export default function PaginaListagemLivros() {
  // useEffect(() => {
  //   api.get("/volumes", { params: { q: "ring" } });
  // }, []);

  function pesquisarLivro(descricao: string) {
    api.get("/volumes", { params: { q: descricao } });
  }

  return (
    <div className="App">
      <Titulo />
      <Pesquisar pesquisar={pesquisarLivro} />
    </div>
  );
}
