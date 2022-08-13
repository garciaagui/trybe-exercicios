import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Validação de e-mail', () => {
  it('Testa um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testa um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testa se a mensagem de validade não é exibida enquanto o e-mail não for salvo', () => {
    const EMAIL_USER = ''
    render(<ValidEmail email={ EMAIL_USER } />);
    const validationMessage = screen.queryByTestId('id-email-validation');
    expect(validationMessage).not.toBeInTheDocument();
  })

  it('Testa se a mensagem de validade tem a cor vermelha quando o e-mail salvo for INVÁLIDO', () => {
    const EMAIL_USER = 'emailerrado'
    render(<ValidEmail email={ EMAIL_USER } />);
    const validationMessage = screen.getByTestId('id-email-validation');
    expect(validationMessage).toHaveStyle('color: red')
  })

  it('Testa se a mensagem de validade tem a cor verde quando o e-mail salvo for VÁLIDO', () => {
    const EMAIL_USER = 'email@email.com'
    render(<ValidEmail email={ EMAIL_USER } />);
    const validationMessage = screen.getByTestId('id-email-validation');
    expect(validationMessage).toHaveStyle('color: green')
  })
})
