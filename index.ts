import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from "./src/config/config";

const app = express();

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