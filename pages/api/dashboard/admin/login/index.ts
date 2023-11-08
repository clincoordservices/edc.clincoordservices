import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const {method, headers} = req;
    const {email, password} = req.body;
     
    try {
      if (method === 'POST') {
        // Process a POST request
        } else {
        // Handle any other HTTP method
        }
          res.status(200).json({name: "test"})
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }

}