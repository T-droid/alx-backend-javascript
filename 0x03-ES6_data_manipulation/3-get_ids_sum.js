export default function getStudentIdsSum(obj){
    if(!(Array.isArray(obj))){
        return [];
    }
    const sum = obj.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.id;
    }, 0);
    console.log(sum);
}