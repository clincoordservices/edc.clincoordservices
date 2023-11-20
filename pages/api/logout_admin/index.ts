import { removeAuthCookie } from '@/src/utils/cookieGenerator'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {

     try {
        removeAuthCookie(res, process.env.NEXT_PUBLIC_COOKIE_ADMIN! as string);
        res.json({mesage: "token removed"})
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}