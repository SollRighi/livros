import Pesquisar from "../components/pesquisa";
import Titulo from "../components/titulo";
import "./App.css";

export default function PaginaListagemLivros() {
  return (
    <div className="App">
      <Titulo />
      <Pesquisar />
    </div>
  );
}
