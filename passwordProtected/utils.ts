import cookie from 'cookie';
import jwt from 'jsonwebtoken';

import { NextApiRequest } from 'next';

export const COOKIE_NAME = 'cap-password-protect';
export const PASSWORD = process.env.PASSWORD;

export const checkCookieLogin = (req: NextApiRequest): boolean => {
  if (req?.headers?.cookie) {
    const cookies = cookie.parse(req.headers.cookie);
    if (jwt.verify(cookies?.[COOKIE_NAME], PASSWORD)) {
      return true;
    }
  }
  return false;
};
