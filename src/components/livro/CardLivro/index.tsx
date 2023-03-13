import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../../service/api";
import { VolumeInfo } from "../../../types/listagem";
import "./index.css";

interface Props {
  nome: String;
}

export default function CardLivro({ nome }: Props) {
  const [livro, setLivro] = useState<VolumeInfo>();

  function getInfos() {
    api
      .get(`/volumes/${nome}`)
      .then(({ data }) => {
        setLivro(data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    getInfos();
  }, [getInfos]);

  if (!livro) {
    return null;
  }

  return (
    <div className="styleCard">
      <img
        src={livro.imageLinks?.smallThumbnail}
        alt="imagemLivro"
        style={{ width: "300px" }}
      />
      {livro.title}
    </div>
  );
}
