/* Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль. */

// const numberPower = (x, n) => Math.pow(x, n);

const numberPower = (x, n) => {
    let poweredNumber = 1; 
    for (let i = 1; i <= n; i++) {
        poweredNumber *= x;
    }
    return poweredNumber;
};

console.log(numberPower(2, 2));
console.log(numberPower(4, 4));
console.log(numberPower(5, 0));
console.log(numberPower(6, 1));