 const verifyDataValue = function(data: any){
    return (data === undefined);
}
const verifyDataType = function(data: any){
    return (typeof data === "string");
}

export {verifyDataType, verifyDataValue};