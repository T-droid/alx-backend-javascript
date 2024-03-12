export default function cleanset(aSet, startString){
    const strings = [...aSet].filter((str) => {
        return str.startsWith(startString);
    })
    .map((str) => str.slice(startString.length))
    .join('-');
    return strings;
}