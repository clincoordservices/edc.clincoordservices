import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';


export const setAuthCookie = (res: NextApiResponse, token: string, cookieName:string): void => {
    const DAYS_IN_A_WEEK = 7;
    const HOURS_IN_A_DAY = 24;
    const A_SECONDS = 60;
    const A_MINUTE = 60;
    // const A_MILLISIME = 1000;
    const EXPIRE_IN_A_WEEK = (HOURS_IN_A_DAY * A_MINUTE * A_SECONDS ) * DAYS_IN_A_WEEK;
  const cookieValue = serialize(cookieName, token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: EXPIRE_IN_A_WEEK, 
    path: '/', 
  });

  res.setHeader('Set-Cookie', cookieValue);
};

export const removeAuthCookie = (res: NextApiResponse, cookieName:string): void => {
  const cookieValue = serialize(cookieName, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0), 
    maxAge: 0,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookieValue);
};

export const removeAuthCookie_ = ( cookieName:string): void => {
  serialize(cookieName, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0), 
    maxAge: 0,
    path: '/',
  });

};
export const getAuthCookie = (req: NextApiRequest, cookieName:string): string | null => {
  return parse(req.headers.cookie || '')[cookieName] || null;
};

