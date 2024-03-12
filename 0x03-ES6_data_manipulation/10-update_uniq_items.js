export default function updateUniqueItems(aMap){
    return aMap.forEach((value, key) => {
        if (value === 1){
            aMap.set(key, 100);
        } 
    });
}