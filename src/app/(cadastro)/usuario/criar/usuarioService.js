export async function usuarioService(dados) {
  const response = await fetch("/api/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  const resultado = await response.json();
  return resultado;
}
