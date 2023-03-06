import { Input } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function Pesquisar() {
  return (
    <div className="Style">
      <Input
        variant="flushed"
        placeholder="Pesquise um livro"
        width={"800px"}
        margin={"50px"}
      />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<Search2Icon />}
      />
    </div>
  );
}
