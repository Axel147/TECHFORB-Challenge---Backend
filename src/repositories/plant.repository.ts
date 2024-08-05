import { Plant } from "../models/plant.model";
import { pool } from "../config/db";

export class PlantRepository {

    findPlants = async () => {
        const res = await pool.query(`SELECT * FROM "challenge"."plant"`);
        return res.rows;
    };

    
    createPlant = async (plant: Plant) => {
        const res = await pool.query(
            'INSERT INTO "challenge"."plant" (name, readings, country, mediumAlerts, redAlerts, disableSensors) VALUES ($1, $2, $3, $4, $5, $6)',
            [plant.name, plant.readings, plant.country, plant.mediumAlerts, plant.redAlerts, plant.disableSensors]
        );

        return res.rows[0];
    };

}
