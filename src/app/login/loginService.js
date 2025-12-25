
// export async function autenticarUsuario(cpf, senha) {
//   // Simula um pequeno atraso como se fosse uma requisição real
//   await new Promise((resolve) => setTimeout(resolve, 400));
  
//   // Mock de dados (a ser substituído por backend real futuramente)
//   const usuarioMock = {
//     cpf: "",
//     senha: "",
//   };

//   // return cpf === usuarioMock.cpf && senha === usuarioMock.senha;
//   return true;
// }
// src/app/login/loginService.js

export async function autenticarUsuario(cpf, senha) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cpf, senha }),
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.sucesso === true;
  } catch (error) {
    console.error("Erro no login:", error);
    return false;
  }
}
