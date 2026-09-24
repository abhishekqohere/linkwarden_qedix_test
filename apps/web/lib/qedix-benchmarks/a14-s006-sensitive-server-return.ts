import { hashSync } from 'bcrypt';

export async function qedixLeakSensitiveServerResult(
  password: string,
) {
  'use server';

  const hashedPassword = hashSync(password, 10);

  return hashedPassword;
}