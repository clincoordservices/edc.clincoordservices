import User from '@/src/entities/User';
import { setAuthCookie } from '@/src/utils/cookieGenerator';
import { generateJWT } from '@/src/utils/jwt/generateJWT';
import type { NextApiRequest, NextApiResponse } from 'next';
 
const newUser: User = {
  id: "343568482",
  first_name: 'Josemar',
  last_name: 'Carvalho',
  middle_name: 'Da Silva',
  email: 'admin@admin.com',
  company: 'Example Inc',
  password: 'secretpassword',
  institution: 'Example University',
  project_id: ['Example Project', 'Example Project'],
  role: 'Developer',
  access_level: 'Admin',
};

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
  const user: User = {
    id: "343568482",
    first_name: 'Josemar',
    last_name: 'Carvalho',
    middle_name: 'Da Silva',
    email: 'admin@admin.com',
    company: 'Example Inc',
    password: 'secretpassword',
    institution: 'Example University',
    project_id: ['Example Project', 'Example Project'],
    role: 'Developer',
    access_level: 'Admin',
  }
  let result =false; 
  const {email, password} = req.body;
     try {

      if(email === user.email, password === user.password) result = true;

  
      if(!result) {
        return res.status(400).json({message: "Inavlid credencials!", result: false});
      }
  
      const token = generateJWT(user);
      setAuthCookie(res, token, process.env.NEXT_PUBLIC_COOKIE_ADMIN! as string);
      return res.json({token, user, result});
     } catch(err){
        throw new Error("Intern Error. Report it.");
     }
  
}