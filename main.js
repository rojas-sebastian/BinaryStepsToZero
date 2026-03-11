function main(S){
    const binaryString = S.replace(/^0+/, "").split("");
    let numberOperations = 0;
    while(binaryString.length > 1 || binaryString.join("") !== "0"){
        const isOddBit = binaryString.pop()
        if(isOddBit === "1"){
            binaryString.push("0");
        }
        numberOperations++;
    }
    return numberOperations;
}

export default main;