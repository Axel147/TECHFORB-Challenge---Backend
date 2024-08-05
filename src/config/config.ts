require("dotenv").config();

export const PORT = process.env.PORT || 3001;
export const USERDB = process.env.USERDB;
export const HOSTDB = process.env.HOSTDB;
export const NAMEDB = process.env.NAMEDB;
export const PASSWORDDB = process.env.PASSWORDDB;
export const PORTDB = process.env.PORTDB;
export const JWT_SECRET = process.env.JWT_SECRET;