
declare module 'bcrypt';
declare module 'jsonwebtoken';
declare module 'nodemailer';

declare namespace Express {
  export interface Request {
    user?: any;
  }
}
