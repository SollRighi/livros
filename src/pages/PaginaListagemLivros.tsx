import Pesquisar from "../components/pesquisa";
import Titulo from "../components/titulo";
import "../App.css";
import { useState } from "react";
import api from "../service/api";
import { SimpleGrid } from "@chakra-ui/react";
import { Item, RespostaListagem } from "../types/listagem";
import CardLivro from "../components/livro/CardLivro";

interface Types {
  data: RespostaListagem;
}

export default function PaginaListagemLivros() {
  const [livros, setLivos] = useState<Item[]>([]);

  function pesquisarLivro(descricao: string) {
    api
      .get("/volumes", { params: { q: descricao } })
      .then(({ data }: Types) => {
        const { items } = data;
        setLivos(items);
        //   setAvancar(next);
        //   setVoltar(previous);
      });
  }

  return (
    <div className="App">
      <Titulo />
      <Pesquisar pesquisar={pesquisarLivro} />
      <div className="divLivros">
        <SimpleGrid columns={6} spacing={50}>
          {livros.map((livro, index) => {
            return <CardLivro nome={livro.volumeInfo.title} key={index} />;
          })}
        </SimpleGrid>
      </div>
    </div>
  );
}
function then(arg0: ({ data }: any) => void) {
  throw new Error("Function not implemented.");
}
