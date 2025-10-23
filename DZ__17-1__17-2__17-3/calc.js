class Calculator {

    add(variable1, variable2) {
        return variable1 + variable2;
    }
    subtract(variable1, variable2) {
        return variable1 - variable2;
    }
    multiply(variable1, variable2) {
        return variable1 * variable2;
    }
    divide(variable1, variable2) {
        if (variable2 === 0) {
            console.log("Ділення на нуль неможливе!")
        }
        else{
            return variable1 / variable2;
        }
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4

