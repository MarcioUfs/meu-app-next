"use client";

import React, { useState } from "react";

export default function Buracos() {
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
    <div className="justify-center items-center flex flex-col min-h-screen p-4">
      <h1 className="text-1xl text-justify mb-6">Preencha os dados abaixo e contribua com sua cidade</h1>
      <p className="mb-2 text-justify">Adicione o máximo de informações que puder</p> 

      <textarea
        maxLength={500}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descreva o problema (máx. 500 caracteres)"
        className="border p-3 rounded w-64 mb-6"
      />

      <div className="grid grid-cols-3 gap-4 w-64">
        <label className="bg-blue-500 text-white text-center py-2 rounded cursor-pointer hover:bg-blue-600">
          Foto
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFotos}
          />
        </label>

        <label className="bg-green-500 text-white text-center py-2 rounded cursor-pointer hover:bg-green-600">
          Vídeo
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideo}
          />
        </label>

        <button
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
          onClick={handleLocalizacao}
        >
          Localização
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
  );
}