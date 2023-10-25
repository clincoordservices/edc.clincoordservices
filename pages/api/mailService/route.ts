import safeParseFunctionContactUs from '@/app/utils/form_validation/formValidation';
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
       const {first_name, last_name, message, subject} = safeParseFunctionContactUs(req.body);


       res.status(200).json({first_name, last_name, message, subject});
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}