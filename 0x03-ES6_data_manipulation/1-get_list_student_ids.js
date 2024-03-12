export default function getListStudentIds(obj){
    if (Array.isArray(obj)){
        return obj.map((item) => {
            return item.id;
        });
    }
    return [];
}