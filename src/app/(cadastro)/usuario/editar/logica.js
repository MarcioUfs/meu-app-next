export async function buscarUsuario() {
  try {
    const res = await fetch("/api/usuario", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch {
    return { sucesso: false, mensagem: "Erro ao buscar usuário" };
  }
}

export async function atualizarUsuario(dados) {
  // Sanitização
  const nome = dados.nome?.trim();
  const sobrenome = dados.sobrenome?.trim();
  const cpf = dados.cpf?.replace(/\D/g, "");
  const telefone = dados.telefone?.replace(/\D/g, "");
  const email = dados.email?.trim();
  const senha = dados.senha;
  const confirmarSenha = dados.confirmarSenha;

  // Validações
  if (!nome || nome.length < 2)
    return { sucesso: false, mensagem: "Nome inválido" };

  if (!sobrenome || sobrenome.length < 2)
    return { sucesso: false, mensagem: "Sobrenome inválido" };

  if (cpf.length !== 11)
    return { sucesso: false, mensagem: "CPF inválido" };

  if (!email || !email.includes("@"))
    return { sucesso: false, mensagem: "Email inválido" };

  if (telefone.length < 10)
    return { sucesso: false, mensagem: "Telefone inválido" };

  if (senha || confirmarSenha) {
    if (senha !== confirmarSenha)
      return { sucesso: false, mensagem: "Senhas não coincidem" };

    if (senha.length < 8)
      return { sucesso: false, mensagem: "Senha muito curta" };

    if (senha.length > 16)
      return { sucesso: false, mensagem: "Senha muito longa" };
  }

  try {
    const res = await fetch("/api/usuario", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        nome,
        sobrenome,
        cpf,
        telefone,
        email,
        senha: senha || null,
      }),
    });

    const data = await res.json();
    return data;
  } catch {
    return { sucesso: false, mensagem: "Erro ao atualizar usuário" };
  }
}
