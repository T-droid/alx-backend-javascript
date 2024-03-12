export default function createInt8TypedArray(length, position, value){
    const buffer = new ArrayBuffer(length);
    const intView = new DataView(buffer, 0, length)
    const int8array = new Int8Array(buffer);
    int8array[position] = value;
    return intView;
}