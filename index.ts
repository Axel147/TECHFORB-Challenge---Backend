import express from "express";
import routes from "./src/routes/index.routes";
import bodyParser from 'body-parser';
import { PORT } from "./src/config/config";
const cors = require('cors');

const app = express();

app.use(cors)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

const port = parseInt(PORT + "") //solo para ver si render puede escuchar este puerto

app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor ejecutandose en http://localhost:${port || 3001}/`);
});

