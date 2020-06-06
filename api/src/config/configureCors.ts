import { NextFunction, Request, Response } from 'express';

const allowedOrigins = ['http://localhost:4000', 'https://www.tv-minder.com'];

const configureCors = (req: Request, res: Response, next: NextFunction) => {
  const { origin } = req.headers;

  if (origin && allowedOrigins.includes(origin as string)) {
    res.set('Access-Control-Allow-Origin', origin);
  }

  res.set({
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
  });

  next();
};

export default configureCors;
