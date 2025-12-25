"use client";

import { useState } from "react";
import { cadastrarUsuario } from "./logica";
import { useRouter } from "next/navigation";
import Header from "../../../../components/header/Header";
import aplicarMascaraCPF from "../../../../functions/aplicaMascaraCPF";
import aplicarMascaraTelefone from "../../../../functions/aplicarMascaraTelefone";
import Link from "next/link";

export default function Formulario() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;

    let valorFinal = value;

    if (name === "cpf") valorFinal = aplicarMascaraCPF(value);
    if (name === "telefone") valorFinal = aplicarMascaraTelefone(value);

    setForm({ ...form, [name]: valorFinal });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const resposta = await cadastrarUsuario(form);

    if (!resposta.sucesso) {
      alert(resposta.mensagem);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    router.push("/login");
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <h1 className="text-2xl font-semibold text-center text-black">
            Cadastro de Usuário
          </h1>
          <label className="text-black">Nome:</label>
          <input
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="text-black">Sobrenome</label>
          <input
            name="sobrenome"
            placeholder="Sobrenome"
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="text-black">CPF</label>
          <input
            name="cpf"
            placeholder="CPF"
            value={form.cpf}
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="text-black">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="text-black">Telefone</label>
          <input
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="text-black">Senha</label>
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <label className="text-black">Confirmar Senha</label>
          <input
            name="confirmarSenha"
            type="password"
            placeholder="Confirmar Senha"
            onChange={handleChange}
            className="text-black w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded bg-blue-500 py-2 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Cadastrar
          </button>
          <div className="flex justify-between mt-4">
            <Link href="/">
              <button className="bg-orange-500 text-white p-2 rounded mt-4 w-24 hover:bg-orange-600">
                Voltar
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-green-500 text-white p-2 rounded mt-4 w-24 hover:bg-green-600">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
