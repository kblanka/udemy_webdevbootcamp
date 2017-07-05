//isEven

function isEven(num){
    return num % 2 !== 0;
}

//got a number and returns the factorial of that number

function factorial(num){
    if(num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

//got a kebab-cased string argument and returns the snake_cased version

function kebabToSnake(string){
    var newString = string.replace(/-/g , "_")
    return newString;
}