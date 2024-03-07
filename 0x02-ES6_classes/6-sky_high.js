import Building from "./5-building"

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors){
        super(sqft);
        this._floors = floors;
    }

    //setter for sqft
    set sqft(new_sqft) {
        this._sqft = new_sqft;
    }
    //getter for sqft
    get sqft() { return this._sqft; }

    //setter for sqft
    set floors(new_floors) {
        this._floors = new_floors;
    }
    //getter for floors
    get floors() { return this._floors; }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}