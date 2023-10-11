import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res:any) {

  

  
    // Retorna um objeto JSON com os dados da resposta
    return res.json({ name: 'John Doe' });
  
}