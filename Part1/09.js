// **Условие:** Напиши `isPalindrome(chars)`, которая проверит, является ли массив символов палиндромом (одинаково читается слева направо и справа налево).

// Вход:
const chars = ["т", "о", "п", "о", "т"];

// Вызов:
const result = isPalindrome(chars);

// Ожидаемый результат:
const expected = true;

function isPalindrome(chars) {
  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) return false;
  }
  return true;
}
