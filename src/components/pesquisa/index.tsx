import { Input } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "./index.css";
export default function Pesquisar() {
  return (
    <div className="StylePesquisar">
      <Input
        variant="flushed"
        placeholder="Pesquise um livro"
        _placeholder={{ color: "white" }}
        color={"white"}
        width="auto"
      />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<Search2Icon />}
      />
    </div>
  );
}
