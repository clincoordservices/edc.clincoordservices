 const verifyDataValue = function(data: any){
    return (data !== undefined && data !== Object);
}
const verifyDataType = function(data: any){
    return (typeof data !== "string");
}
export {verifyDataType, verifyDataValue};