export default function getStudentsByLocation(obj, city){
    if (!(Array.isArray(obj))){
        console.log("Not an object");
        return [];
    }
    return obj.filter((item) => {
        return item.location === city;
    });
}