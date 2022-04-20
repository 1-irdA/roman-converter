let result = document.getElementById('result');
let input = document.getElementById('inputNumber');

input.addEventListener('input', convertToRoman);

/**
 * Convert decimal to roman number
 * @param {String} decimal number to convert
 */
function convertToRoman(decimal) {
    let num = parseInt(decimal.target.value);
    if (num > 3999) {
        return;
    }

    let r = "";
    let numbers = [
        1000, 
        900, 500, 400, 100, 
        90, 50, 40, 10, 
        9, 5, 4, 1 
    ];
    let romans = [
        "M", 
        "CM", "D", "CD", "C", 
        "XC", "L", "XL", "X", 
        "IX", "V", "IV", "I"
    ];

    for (let i = 0; i < numbers.length; i++) {
        if (num >= numbers[i]) {
            for (let j = 0; j < Math.floor(num / numbers[i]); j++) {
                r += romans[i];
            }
            num -= numbers[i] * Math.floor(num / numbers[i]);
        }
    }
    result.textContent = r;
};

