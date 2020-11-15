function factorial(int) {
    if (int < 0) {
        return 'try positive number';
    } else if (int == 0) {
        return 'factorial of 0 is 1';
    } else {
        let resultFact = 1;
    for (i = 1; i <= int; i++) {
        resultFact *= i;
    }
    return resultFact;
    }
        
}
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-3));
