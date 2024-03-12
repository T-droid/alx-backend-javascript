export default function hasValuesFromArray(aSet, anArray){
    return anArray.every(value => [...aSet].includes(value));
}