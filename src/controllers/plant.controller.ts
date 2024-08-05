import { Request, Response } from "express";
import { Plant } from "../models/plant.model";
import { PlantRepository } from "../repositories/plant.repository";

export class PlantController {
    static getAll = async (req: Request, res: Response) => {
        const plantRepository = new PlantRepository();
        try {
            const plant = await plantRepository.findPlants();
            res.status(200).json(plant)
        } catch (error) {
            res.status(500).json({error});
        }
    }

    static totalFieldSum = async (req: Request, res: Response) => {
        const plantRepository = new PlantRepository();
        const { field } = req.params;

        const validFields = ["readings", "mediumAlerts", "redAlerts", "disableSensors"];
        if (!validFields.includes(field)) {
            return res.status(400).json({ error: "Invalid field" });
        }

        try {
            const minuscula = field.toLowerCase()
            const total = await plantRepository.totalCount(minuscula);
            res.status(200).json(total.rows[0]);
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
            plant.valid = true;

            await plantRepository.createPlant(plant);
            return res.status(201).json({ message: "Plant created" });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
/*
    static deletePlant = async (req: Request, res: Response) => {
        const { id } = req.params;
		const idInt = parseInt(id as string);
        const plantRepository = new PlantRepository();

		try {
			const plant = await plantRepository.findById(idInt);
            try{
                plant.valid = false;
                console.log(plant);
                await plantRepository.deletePlant(plant);
                try{
                    return res.status(201).json({ message: 'Plant deleted' });
                }catch(error){
                    return res.status(500).json(error);
                }
                
            }catch(error){
                res.json(error);
            }
		
		} catch (error) {
			return res.status(500).json(error);
		}
    }*/

        static deletePlant = async (req: Request, res: Response) => {
            const { id } = req.params;
            const idInt = parseInt(id as string);
            const plantRepository = new PlantRepository();
            let plant = new Plant();

            try{
                plant = await plantRepository.findById(idInt);
                plant.setValid();
                
                try {
                    await plantRepository.deletePlant2(plant);
                    return res.status(200).json({ message: 'Plant deleted' });
                } catch (error) {
                    return res.status(500).json({ message: 'Something goes wrong' });
                }
            }catch(error){
                return res.json({message: error})
            }
            
        }

}