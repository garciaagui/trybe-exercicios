import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';


describe('Tela de inserção de e-mail', () => {
  it('Verifica se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  // -- EXEMPLO DE TESTE INVÁLIDO --
  // it('Verifica se existe um botão', () => {
  //   render(<App />);
  //   const btn = screen.getByRole('button');
  //   expect(btn).toBeInTheDocument();
  // });
  
  it('Verifica se existem dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  
  it('Verifica se existe um botão de "enviar"', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  
  it('Verifica se o botão e o campo email estão funcionando.', () => {
    render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
})


