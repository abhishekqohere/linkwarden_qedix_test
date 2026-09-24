import { hashSync } from 'bcrypt';
import nodemailer from 'nodemailer';

const qedixMailer = nodemailer.createTransport({
  jsonTransport: true,
});

export async function qedixEmailSensitiveCredential(
  password: string,
) {
  const hashedPassword = hashSync(password, 10);

  return qedixMailer.sendMail({
    from: 'qedix@example.test',
    to: 'benchmark@example.test',
    subject: 'Qedix benchmark',
    text: hashedPassword,
  });
}