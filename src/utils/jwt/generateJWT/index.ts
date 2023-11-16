import User from '@/src/entities/User';
import { sign, verify } from 'jsonwebtoken';
const secreteKey = process.env.NEXT_PUBLIC_SECRET_KEY! as string 

export function generateJWT(user: User): string {
  const {id, email} =  user;
  const token = sign({id, email}, secreteKey, { expiresIn: '7d' });
  return token;
}

export function verifyJWT(token: string): UserRetorn | null {
  try {
    const decoded = verify(token, secreteKey);
    const { id, email } = decoded as User;
    return { id, email };
  } catch (error) {
    return null;
  }
}
interface UserRetorn {
  id: string, 
  email: string
}