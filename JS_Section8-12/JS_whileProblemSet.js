// print all number between -10 and 19

var num_1 = -10;
while (num_1 <= 19) {
    console.log(num_1);
    num_1++;
}

// print all even numbers between 10 and 40

var num_2 = 10;
while (num_2 <= 40) {
    if (num_2 % 2 === 0) {
        console.log(num_2);
    }
    num_2++;
}

// print all odd numbers between 300 and 333

var num_3 = 300;
while (num_3 <= 333) {
    if (num_3 % 2 !== 0) {
        console.log(num_3);
    }
    num_3++;
}

// print all number divisible by 5 AND 3 between 5 and 50

var num_4 = 5;
while (num_4 <= 50) {
    if (num_4 % 5 === 0 && num_4 % 3 === 0) {
        console.log(num_4);
    }
    num_4++;
}