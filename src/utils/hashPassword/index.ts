import {hash, compare, genSalt} from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const salt = await genSalt(10);
  return await hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await compare(password, hash);
}