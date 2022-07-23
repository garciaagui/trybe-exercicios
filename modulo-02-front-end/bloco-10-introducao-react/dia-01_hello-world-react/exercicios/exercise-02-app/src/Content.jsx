import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const showContent = (obj, key) => {
  const { conteudo, bloco, status } = obj;
  return (
    <section key={key} className="content-card">
      <span className="subject">O conteúdo é: {conteudo}</span><br/>
      <span>Status: {status}</span><br/>
      <span>Bloco: {bloco}</span>
    </section>
  );
}

class Content extends React.Component {
  render() {
    return (
      <section className="content-section">{conteudos.map((conteudo, index) => showContent(conteudo, index))}</section>
    )
  }
}

export default Content