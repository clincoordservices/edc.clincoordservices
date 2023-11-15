import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const COOKIE_NAME = 'auth-cookie-login';

export const setAuthCookie = (res: NextApiResponse, token: string): void => {
    const DAYS_IN_A_WEEK = 7;
    const HOURS_IN_A_DAY = 24;
    const A_SECONDS = 60;
    const A_MINUTE = 60;
    // const A_MILLISIME = 1000;
    const EXPIRE_IN_A_WEEK = (HOURS_IN_A_DAY * A_MINUTE * A_SECONDS ) * DAYS_IN_A_WEEK;
  const cookieValue = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: EXPIRE_IN_A_WEEK, 
    path: '/', 
  });

  res.setHeader('Set-Cookie', cookieValue);
};

export const removeAuthCookie = (res: NextApiResponse): void => {
  const cookieValue = serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'strict',
    expires: new Date(0), 
    path: '/',
  });

  res.setHeader('Set-Cookie', cookieValue);
};

export const getAuthCookie = (req: NextApiRequest): string | null => {
  return parse(req.headers.cookie || '')[COOKIE_NAME] || null;
};

