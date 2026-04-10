/**
 * Exam 1 — JavaScript Fundamentals
 *
 * Complete each function below. Run `nibras test` to check your work,
 * then `nibras submit` when you're ready to submit.
 */

/**
 * Returns the sum of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

/**
 * Returns the factorial of a non-negative integer n.
 * factorial(0) = 1, factorial(n) = n * factorial(n - 1)
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n <= 1) return 0;
  return n * factorial(n - 1);
}

/**
 * Returns true if the string is a palindrome (case-insensitive), false otherwise.
 * A palindrome reads the same forwards and backwards.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  const normalized = str.toLowerCase();
  return normalized === normalized.split('').reverse().join('');
}

module.exports = { sum, factorial, isPalindrome };
