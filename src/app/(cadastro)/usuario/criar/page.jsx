"use client";

import { useState } from "react";
import { cadastrarUsuario } from "./logica";
import Header from "../../../../components/header/Header";

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

  function aplicarMascaraCPF(valor) {
    return valor
      .replace(/\D/g, "")
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function aplicarMascaraTelefone(valor) {
    return valor
      .replace(/\D/g, "")
      .slice(0, 11)
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  }

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
  }

  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Cadastro de Usuário
        </h1>
        <label className="text-gray-600">Nome:</label>
        <input
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <label className="text-gray-600">Sobrenome</label>
        <input
          name="sobrenome"
          placeholder="Sobrenome"
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <label className="text-gray-600">CPF</label>
        <input
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <label className="text-gray-600">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <label className="text-gray-600">Telefone</label>
        <input
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <label className="text-gray-600">Senha</label>
        <input
          name="senha"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <label className="text-gray-600">Confirmar Senha</label>
        <input
          name="confirmarSenha"
          type="password"
          placeholder="Confirmar Senha"
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </div>
    </>
  );
}
