import express from "express";
import routes from "./src/routes/index.routes";
import bodyParser from 'body-parser';
import { PORT } from "./src/config/config";
const cors = require('cors');

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

const port = 10000
const host = '0.0.0.0'
app.listen(port, host, () => {
    console.log(`Servidor ejecutandose en ${host}:${port || 3001}/`);
});

