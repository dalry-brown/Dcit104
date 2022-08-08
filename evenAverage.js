function sumEven(num){
    let sum = 0;
    let average;
    for(let i = 2; i <= num; i += 2){
        sum = sum + i;
        average = sum/(num/2) 
    }
    console.log(average);
}
sumEven(10000);