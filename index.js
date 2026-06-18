// 1
function calculateTax(amount) {
  return amount * 0.1;
}

const tax = calculateTax(200);
console.log(tax);

// 2
function convertToUpperCase(text) {
  return text.toUpperCase();
}

const upper = convertToUpperCase("hello world");
console.log(upper);

// 3
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const max = findMaximum(45, 82);
console.log(max);

// 4
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Racecar")); // true  (case-insensitive)
console.log(isPalindrome("hello")); // false

// 5
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice * (1 - discountPercentage / 100);
}

const price = calculateDiscountedPrice(100, 20);
console.log(price);

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
