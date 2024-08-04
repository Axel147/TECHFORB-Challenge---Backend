import express from "express";
import routes from "./src/routes/index.routes";
import bodyParser from 'body-parser';
import { PORT, MONGODB_URI } from "./src/config/config";

const mongoose = require("mongoose");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log("Conectado a MongoDB Atlas")
    app.listen(PORT, () => {
        console.log(`Servidor ejecutandose en http://localhost:${PORT || 3001}/`);
    });
})
.catch((error) => {
    console.error("Error al conectar con MongoDB Atlas ", error)
});