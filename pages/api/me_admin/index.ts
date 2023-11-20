import User from "@/src/entities/User";
import { getAuthCookie } from "@/src/utils/cookieGenerator";
import { verifyJWT } from "@/src/utils/jwt/generateJWT";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest,res: NextApiResponse) {
 
    try {
         const adminToken_ = process.env.NEXT_PUBLIC_COOKIE_ADMIN! as string;

         if(adminToken_){
            const cookieUser = getAuthCookie(req, adminToken_);
            const user = verifyJWT(cookieUser as string) as User;
    
            const user_admin = {...user, password:""}; 
            res.json({mesage: "user returned", user_admin, adminToken_:cookieUser});
         }
         res.status(400).json({error: 'failed to load data'})
  } catch (err) {
    res.status(500).json({error: 'failed to load data'})
  }
}