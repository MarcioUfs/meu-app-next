"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { autenticarUsuario } from "./loginService";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const autenticado = await autenticarUsuario(cpf, senha);

    if (autenticado) {
      setErro("");
      router.push("/ocorrencia");
    } else {
      setErro("Login ou senha inválidos.");
    }
  };

  return (
    <div className="justify-center items-center flex flex-col min-h-screen">
      <Image
        src="/image/p.png"
        alt="pref.js logo"
        width={150}
        height={38}
        priority
      />

      <h1 className="m-5">Seja bem-vindo</h1>

      <input
        type="text"
        placeholder="Login (CPF)"
        className="border p-2 m-2 rounded w-64"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="border p-2 m-2 rounded w-64"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600"
        onClick={handleLogin}
      >
        Enviar
      </button>

      {erro && <p className="text-red-500 mt-4">{erro}</p>}
    </div>
  );
}