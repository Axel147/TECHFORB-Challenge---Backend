import { USERDB, HOSTDB, NAMEDB, PASSWORDDB, PORTDB } from "./config";

const { Pool } = require('pg');

export const pool = new Pool({
    user: USERDB,
    host: HOSTDB,
    database: NAMEDB,
    password: PASSWORDDB,
    port: PORTDB,
});
