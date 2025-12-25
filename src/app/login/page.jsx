"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { autenticarUsuario } from "./loginService";
import aplicarMascaraCPF from "../../functions/aplicaMascaraCPF";
import Link from "next/link";
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

  function handleChange(e) {
    const { value } = e.target;

    let valorFinal = value;

    valorFinal = aplicarMascaraCPF(value);

    setCpf(valorFinal);
  }
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
        placeholder="CPF"
        name="cpf"
        className="border p-2 m-2 rounded w-64"
        value={cpf}
        onChange={handleChange}
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
      <div className="flex justify-between w-64 mt-4">
        <Link href="/">
          <button className="bg-orange-500 text-white p-2 rounded mt-4 w-24 hover:bg-orange-600">
            Voltar
          </button>
        </Link>
        <Link href="/usuario/criar">
          <button className="bg-green-500 text-white p-2 rounded mt-4 w-24 hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </div>
      {erro && <p className="text-red-500 mt-4">{erro}</p>}
    </div>
  );
}
