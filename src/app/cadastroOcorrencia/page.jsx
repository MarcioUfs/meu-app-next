"use client";

import React, { useState } from "react";
import Header from "../../components/header/Header";

export default function CadastroOcorrencia() {
  const [descricao, setDescricao] = useState("");
  const [fotos, setFotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [erro, setErro] = useState("");

  // Handle upload de fotos
  const handleFotos = (e) => {
    if (e.target.files) {
      setFotos(Array.from(e.target.files));
    }
  };

  // Handle upload de vídeo com validação
  const handleVideo = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 300 * 1024 * 1024) {
        setErro("O vídeo deve ter no máximo 300 MB.");
        return;
      }

      const videoElement = document.createElement("video");
      videoElement.preload = "metadata";
      videoElement.onloadedmetadata = () => {
        window.URL.revokeObjectURL(videoElement.src);
        if (videoElement.duration > 60) {
          setErro("O vídeo deve ter no máximo 1 minuto.");
          return;
        }
        setErro("");
        setVideo(file);
      };
      videoElement.src = URL.createObjectURL(file);
    }
  };

  // Capturar localização
  const handleLocalizacao = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocalizacao({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setErro("");
        },
        () => {
          setErro("Não foi possível obter a localização.");
        }
      );
    } else {
      setErro("Geolocalização não suportada neste dispositivo.");
    }
  };

  return (
    <div>
      <Header />
      <div className="justify-center items-baseline-last flex flex-row">
      </div>
      <div className="justify-center items-center flex flex-col min-h-screen p-4">
        <h1 className="text-1xl text-justify mb-6">
          Preencha os dados abaixo e contribua com sua cidade
        </h1>
        <p className="mb-2 text-justify">
          Adicione o máximo de informações que puder
        </p>

        <textarea
          maxLength={500}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descreva o problema (máx. 500 caracteres)"
          className="border p-3 rounded w-64 mb-6"
        />

        <div className="grid grid-cols-3 gap-4 w-64">
          <label className="flex items-center bg-blue-500 text-white text-center rounded cursor-pointer hover:bg-blue-600"
          title="Insira foto(s) mínimo 1 e máximo 3">
            {/* <label className="bg-blue-500 text-white text-center py-2 rounded cursor-pointer hover:bg-blue-600"> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 py-auto mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFotos}
            />
          </label>

          <label className="flex items-center bg-green-500 text-white text-center py-2 rounded cursor-pointer hover:bg-green-600"
          title="Faça um vídeo! máximo 30 segundos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 py-auto mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideo}
            />
          </label>

          <button
            className="flex items-center bg-red-500 text-white py-2 rounded hover:bg-red-600"
            onClick={handleLocalizacao}
            title="Insira a localização"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 py-auto mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </button>
        </div>

        {erro && <p className="text-red-500 mt-4">{erro}</p>}

        {fotos.length > 0 && (
          <p className="mt-2 text-sm text-gray-600">
            {fotos.length} foto(s) selecionada(s).
          </p>
        )}

        {video && (
          <p className="mt-2 text-sm text-gray-600">Vídeo: {video.name}</p>
        )}

        {localizacao && (
          <p className="mt-2 text-sm text-gray-600">
            Localização: {localizacao.lat}, {localizacao.lng}
          </p>
        )}
      </div>
    </div>
  );
}
