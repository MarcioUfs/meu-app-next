"use client";

import Navbar from "../../components/(navBar)/Navbar";
import dadosOcorrencias from "./dadosOcorrencias.js";

export default function VerOcorrencia() {
  const ocorrencias = dadosOcorrencias();
  return (
    <div>
      <Navbar />
      <h1>{ocorrencias.titulo}</h1>
        <p>{ocorrencias.descricao}</p> 
    </div>
  );
}