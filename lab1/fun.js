// 0 - Zero
// 1 - One
// 2 - Two
// 3 - Three

const toWords = (digit) => {
  const words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  return words[digit];
};

console.log(toWords(3));
console.log(toWords(4));
console.log(toWords(5));
