import User from '@/src/entities/User';
import { sign } from 'jsonwebtoken';

export function generateJWT(user: User): string {
  const secret = 'my-secret-key';
  const token = sign({ id: user.id }, secret, { expiresIn: '1h' });
  return token;
}