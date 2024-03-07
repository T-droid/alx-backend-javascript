export default class Building{
    constructor(sqft){
        if (typeof sqft === 'number'){
            this._sqft = sqft;
        }
        else{
            throw TypeError('sqft must be a number');
        }
        //checking if evacuatioWarningMessage is implimented in the subclass
        if (typeof this.evacuationWarningMessage !== 'function') {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    //sqft setter
    set sqft(new_sqft){
        if (typeof new_sqft === 'number'){
            this._sqft = new_sqft;
        }
        else{
            throw TypeError('sqft must be a number');
        }
    }

    //sqft getter
    get sqft(){ return this._sqft; }

    evacuationWarningMessage(){
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}