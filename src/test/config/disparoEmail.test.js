/* eslint-disable linebreak-style */
import { describe } from '@jest/globals';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

const verificarConexao = () => new Promise((resolver, reject) => {
  transporter.verify((error, success) => {
    if (error) {
      reject(error);
    } else {
      resolver(success);
    }
  });
});

describe('Testando disparo de email', () => {
  it('O sistema deve validar se a conexao com o sistema de disparo de email', async () => {
    const estaConectado = true;

    const validarConexao = await verificarConexao();

    expect(validarConexao).toStrictEqual(estaConectado);
  });
});
