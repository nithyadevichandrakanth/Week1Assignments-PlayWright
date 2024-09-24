function numberFunction(num){

    if (num>0) {
        return `positive`
    } 
    else if(num<0 ) {
        return `negative`
    } 
    else if(num==0) {
        return `zero`
    }
}
let num = -11;
let numberType = numberFunction(num);
console.log(numberType);