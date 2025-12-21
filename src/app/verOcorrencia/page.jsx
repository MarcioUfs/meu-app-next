"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
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


// // app/page.tsx (usando App Router)
// import InfiniteScrollFeed from '../components/InfiniteScrollFeed';
// import { fetchPosts } from '../lib/api';

// export default async function HhomePage() {
//   const initialPosts = await fetchPosts(1); // Busca a primeira página no servidor

//   return (
//     <main>
//       <h1 className="text-2xl font-bold p-4">Meu Feed</h1>
//       <InfiniteScrollFeed initialPosts={initialPosts} />
//     </main>
//   );
// }
