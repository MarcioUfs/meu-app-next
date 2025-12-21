
function ocorrencias() {
    const oco = {
    titulo: "Ocorrências",
    descricao: "Lista de todas as ocorrências registradas no sistema.",
    campos: [
      { nome: "ID", tipo: "number" },
      { nome: "Descrição", tipo: "text" },
      { nome: "Localização", tipo: "text" },
      { nome: "Data/Hora", tipo: "datetime" }
    ]
  };
  return oco;
}

export default ocorrencias;