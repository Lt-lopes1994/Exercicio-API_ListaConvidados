let convidados = require('../Dados/ListaDeconvidados');

const listagemConvidados = (req, res) => {
  return res.json(convidados)
};

const verificarNomeNaLista = (req, res) => {
  const {
    nome
  } = req.params;

  const guests = convidados.find((guest) => {
    return guest === nome
  })


  if (!guests) {
    res.json({
      "mensagem": "O convidado buscado não está presente na lista."
    })
  } else {
    res.json({
      "mensagem": "Convidado presente."
    })
  }
}

const cadastro = (req, res) => {
  const {
    nome
  } = req.body;

  const guests = convidados.find((guest) => {
    return guest === nome
  });

  if (!guests) {
    convidados.push(nome);
    return res.json({
      menssagem: "Convidado adicionado."
    })
  } else {
    return res.json({
      "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
    })
  }
};

const deletarNome = (req, res) => {
  const {
    nome
  } = req.params;

  const convidado = convidados.find((guest) => {
    return guest === nome;
  })

  if (!convidado) {
    return res.json({
      "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
    })
  } else {
    convidados = convidados.filter((convidado) => {
      return convidado !== nome
    })
    return res.json({
      "mensagem": "Convidado removido."
    })
  }
}

module.exports = {
  listagemConvidados,
  cadastro,
  deletarNome,
  verificarNomeNaLista
}