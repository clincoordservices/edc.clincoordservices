import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
     console.log(req.body)
  try {
        
        res.status(200).json({name: "test"})
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}