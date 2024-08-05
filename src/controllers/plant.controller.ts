import { Request, Response } from "express";
import { Plant } from "../models/plant.model";
import { PlantRepository } from "../repositories/plant.repository";

export class PlantController {
    static getAll = async (req: Request, res: Response) => {
        const plantRepository = new PlantRepository();
        try {
            const user = await plantRepository.findPlants();
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static createPlant = async (req: Request, res: Response) => {
        const { name, readings, country, mediumAlerts, redAlerts, disableSensors } = req.body;
        const plantRepository = new PlantRepository();
        const plant = new Plant;
        try {
            plant.name = name;
            plant.readings = readings;
            plant.country = country;
            plant.mediumAlerts = mediumAlerts;
            plant.redAlerts = redAlerts;
            plant.disableSensors = disableSensors;

            await plantRepository.createPlant(plant);
            return res.status(201).json({ message: "Plant created" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }

}