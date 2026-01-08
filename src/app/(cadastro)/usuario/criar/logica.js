import { usuarioService } from "./usuarioService";
export async function cadastrarUsuario(dados) {
  // 1. Verificação de existência dos campos
  const camposObrigatorios = [
    "nome",
    "sobrenome",
    "cpf",
    "email",
    "telefone",
    "senha",
    "confirmarSenha",
  ];

  for (const campo of camposObrigatorios) {
    if (!dados[campo] || typeof dados[campo] !== "string") {
      return { sucesso: false, mensagem: `Campo inválido: ${campo}` };
    }
  }

  // 2. Sanitização básica
  const nome = dados.nome.trim();
  const sobrenome = dados.sobrenome.trim();
  const cpf = dados.cpf.replace(/\D/g, "");
  const telefone = dados.telefone.replace(/\D/g, "");
  const email = dados.email.trim().toLowerCase();
  const senha = dados.senha;
  const confirmarSenha = dados.confirmarSenha;

  // 3. Validações de formato
  if (nome.length < 2 || sobrenome.length < 2) {
    return { sucesso: false, mensagem: "Nome ou sobrenome muito curto." };
  }

  if (cpf.length !== 11) {
    return { sucesso: false, mensagem: "CPF inválido." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { sucesso: false, mensagem: "Email inválido." };
  }

  if (telefone.length < 10 || telefone.length > 11) {
    return { sucesso: false, mensagem: "Telefone inválido." };
  }

  // 4. Validação de senha
  if (senha.length < 8) {
    return {
      sucesso: false,
      mensagem: "A senha deve ter no mínimo 8 caracteres.",
    };
  }

  if (senha.length > 16)
    return { sucesso: false, mensagem: "Senha muito longa" };

  if (senha !== confirmarSenha) {
    return { sucesso: false, mensagem: "As senhas não conferem." };
  }

  // 5. Proteção contra payload indevido
  const payloadSeguro = {
    nome,
    sobrenome,
    cpf,
    email,
    telefone,
    senha, // futuramente aplicar hash (bcrypt)
    confirmarSenha 
  };

  // 6. Simulação de envio ao banco
  // await new Promise((resolve) => setTimeout(resolve, 500));
  const resultadoCadastro = await usuarioService(payloadSeguro);
  return  resultadoCadastro ;
}
