export default class Currency {
    constructor(code, name) {
        if (typeof code === 'string'){
            this._code = code;
        }
        else {
            throw TypeError('code must be a string');
        }
        if (typeof name === 'string'){
            this._name = name;
        }
        else {
            throw TypeError('name must be a string');
        }
    }

    //setter for code
    set code(new_code){
        if (typeof new_code === 'string'){
            this._code = new_code;
        }
        else {
            throw TypeError('code must be a string');
        }
    }
    //getter for code
    get code() { return this._code }

    //setter for name
    set name(new_name){
        if (typeof new_name === 'string'){
            this._name = new_name;
        }
        else {
            throw TypeError('name must be a string');
        } 
    }
    //getter for name
    get name() { return this._name; }

    //displayFullCurrency returns the attributes in the format name(code)
    displayFullCurrency(){
        return `${this._name} (${this._code})`;
    }
}