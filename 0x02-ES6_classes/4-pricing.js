import Currency from "./3-currency";
export default class Pricing {
    constructor(amount, currency){
        if (typeof amount === 'number'){
            this._amount = amount;
        }
        else{
            throw TypeError('Amount must be a number');
        }

        if (currency instanceof Currency){
            this._currency = currency;
        }
        else {
            throw TypeError('currency must be of type Currency');
        }
    }
    
    //amount setter
    set amount(new_amount){
        if (typeof new_amount === 'number'){
            this._amount = new_amount;
        }
        else{
            throw TypeError('Amount must be a number');
        }
    }

    //amount getter
    get amount() { return this._amount; }

    //currency setter
    set currency(new_currency){
        if (new_currency instanceof Currency){
            this._currency = new_currency;
        }
        else {
            throw TypeError('currency must be of type Currency');
        }
    }

    //currency getter
    get currency() { return this._currency; }

    displayFullPrice(){
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number'){
            return amount * conversionRate;
        }
        throw TypeError('amount and conversionRate must be both numbers');
    }
}