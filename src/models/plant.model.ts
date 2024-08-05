import { IPlant } from "../interfaces/plant.interface";

export class Plant implements IPlant{
    id;
    name;
    readings;
    country;
    mediumAlerts;
    redAlerts;
    disableSensors;

    constructor(){
        this.id = 0,
        this.name = "",
        this.readings = "",
        this.country = "",
        this.mediumAlerts = "",
        this.redAlerts = "",
        this.disableSensors = ""
    }
}