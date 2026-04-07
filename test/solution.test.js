const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum, factorial, isPalindrome } = require('../src/solution');

// ── Part 1: sum ──────────────────────────────────────────────────────────────

test('sum: adds two positive numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum: adds a positive and negative number', () => {
  assert.equal(sum(-1, 1), 0);
});

test('sum: adds two negative numbers', () => {
  assert.equal(sum(-3, -4), -7);
});

test('sum: handles zero', () => {
  assert.equal(sum(0, 42), 42);
});

// ── Part 2: factorial ─────────────────────────────────────────────────────────

test('factorial: base case 0! = 1', () => {
  assert.equal(factorial(0), 1);
});

test('factorial: 1! = 1', () => {
  assert.equal(factorial(1), 1);
});

test('factorial: 5! = 120', () => {
  assert.equal(factorial(5), 120);
});

test('factorial: 10! = 3628800', () => {
  assert.equal(factorial(10), 3628800);
});

// ── Part 3: isPalindrome ──────────────────────────────────────────────────────

test('isPalindrome: "racecar" is a palindrome', () => {
  assert.equal(isPalindrome('racecar'), true);
});

test('isPalindrome: "hello" is not a palindrome', () => {
  assert.equal(isPalindrome('hello'), false);
});

test('isPalindrome: case-insensitive "Madam"', () => {
  assert.equal(isPalindrome('Madam'), true);
});

test('isPalindrome: single character is a palindrome', () => {
  assert.equal(isPalindrome('a'), true);
});

test('isPalindrome: empty string is a palindrome', () => {
  assert.equal(isPalindrome(''), true);
});
