"use client";

import dadosOcorrencias from "./dadosOcorrencias.js";
import Header from "../../components/header/Header";

export default function VerOcorrencia() {
  const ocorrencias = dadosOcorrencias();
  return (
    <div>
      <Header />
      <h1>{ocorrencias.titulo}</h1>
      <p>{ocorrencias.descricao}</p>
    </div>
  );
}
