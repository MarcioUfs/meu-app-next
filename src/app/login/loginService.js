// Simula o backend de autenticação
export async function autenticarUsuario(cpf, senha) {
  // Simula um pequeno atraso como se fosse uma requisição real
  await new Promise((resolve) => setTimeout(resolve, 400));

  // Mock de dados (a ser substituído por backend real futuramente)
  const usuarioMock = {
    cpf: "032.510.074-83",
    senha: "123",
  };

  return cpf === usuarioMock.cpf && senha === usuarioMock.senha;
}
