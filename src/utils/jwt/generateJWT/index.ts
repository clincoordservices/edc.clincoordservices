import User from '@/src/entities/User';
import { sign } from 'jsonwebtoken';

export function generateJWT(user: User): string {
  const secret = "?mw+id7UI|N'zulaG+GXurY68~)hW@~3}WZc#wM6Ifw<aCF+S4LnE{(]Jm7B>N";
  const token = sign({ id: user.id }, secret, { expiresIn: '7d' });
  return token;
}