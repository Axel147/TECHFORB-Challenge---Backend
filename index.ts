import express from "express";
import routes from "./src/routes/index.routes";
import bodyParser from 'body-parser';
import { PORT } from "./src/config/config";
const cors = require('cors');

const app = express();

//app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT || 3001}/`);
});