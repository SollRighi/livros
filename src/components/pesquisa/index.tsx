import { Input, useToast } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "./index.css";
import { useState } from "react";

interface Props {
  pesquisar: (descricao: string) => void;
}

export default function Pesquisar({ pesquisar }: Props) {
  const [descricao, setDescricao] = useState("");
  const toast = useToast();

  function handleChange(event: any) {
    setDescricao(event.target.value);
  }

  function handleClick() {
    if (descricao === "") {
      toast({
        description: "Digite algo pra realizar a pesquisa",
        status: "error",
      });
    } else {
      pesquisar(descricao);
      setDescricao("");
    }
  }

  return (
    <div className="StylePesquisar">
      <Input
        variant="flushed"
        placeholder="Pesquise um livro"
        _placeholder={{ color: "white" }}
        color={"white"}
        width="100%"
        value={descricao}
        onChange={handleChange}
      />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<Search2Icon />}
        onClick={handleClick}
      />
    </div>
  );
}
