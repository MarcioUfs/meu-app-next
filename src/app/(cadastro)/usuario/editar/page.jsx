"use client";

import { useEffect, useState } from "react";
import { buscarUsuario, atualizarUsuario } from "./logica";
import Header from "../../../../components/header/Header";

export default function Formulario() {
  const [carregando, setCarregando] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  useEffect(() => {
    async function carregarDados() {
      const resposta = await buscarUsuario();

      if (!resposta.sucesso) {
        alert(resposta.mensagem);
        return;
      }

      setForm({
        nome: resposta.dados.nome || "",
        sobrenome: resposta.dados.sobrenome || "",
        cpf: resposta.dados.cpf || "",
        email: resposta.dados.email || "",
        telefone: resposta.dados.telefone || "",
        senha: "",
        confirmarSenha: "",
      });

      setCarregando(false);
    }

    carregarDados();
  }, []);

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

    const resposta = await atualizarUsuario(form);

    if (!resposta.sucesso) {
      alert(resposta.mensagem);
      return;
    }

    alert("Dados atualizados com sucesso!");
  }

  if (carregando) {
    return <p className="text-center mt-10">Carregando dados...</p>;
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
            Editar Usuário
          </h1>

          <label>Nome</label>
          <input name="nome" value={form.nome} onChange={handleChange} />

          <label>Sobrenome</label>
          <input name="sobrenome" value={form.sobrenome} onChange={handleChange} />

          <label>CPF</label>
          <input name="cpf" value={form.cpf} onChange={handleChange} />

          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />

          <label>Telefone</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} />

          <label>Nova Senha (opcional)</label>
          <input name="senha" type="password" onChange={handleChange} />

          <label>Confirmar Nova Senha</label>
          <input name="confirmarSenha" type="password" onChange={handleChange} />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-md"
          >
            Atualizar
          </button>
        </form>
      </div>
    </>
  );
}
