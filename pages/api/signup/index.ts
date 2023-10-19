import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
     console.log(req.body)
  try {
        const {first_name} = req.body
        res.status(200).json({first_name })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}