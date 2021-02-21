/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны.
Обратите внимание на числа 0 и 1. */

function isPrimeOrComposite(num) {
    let value;
    if (num > 1000 || num < 0) {
        value = 'Данные неверны. Введите натуральное число не более 1000.';
    } else {
        if (num === 0 || num === 1) {
            value = `${num} не относится ни к простым, ни к составным числам.`
        } else {
            let counter = 0;
            for (let i = 2; i <= num; i++) {
                if (num % i === 0) {
                    counter++;
                }
            }
            if (counter === 1) {
                value = `${num} - простое число`
            } else {
                value =`${num} - составное число`
            }
        }
    }
    return value;
}

console.log(isPrimeOrComposite(2000))
console.log(isPrimeOrComposite(-4))
console.log(isPrimeOrComposite(0))
console.log(isPrimeOrComposite(1))
console.log(isPrimeOrComposite(9))
console.log(isPrimeOrComposite(7))