/* eslint-disable linebreak-style */
import nodemailer from 'nodemailer';

const main = async () => {
  // Cria uma conta de teste no Ethereal
  const testAccount = await nodemailer.createTestAccount();

  console.log('Conta Ethereal criada:');
  console.log(testAccount);

  // Cria o transporter com essa conta
  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Verifica conexão
  await transporter.verify();
  console.log('Conexão OK com Ethereal!');
};

main().catch(console.error);
