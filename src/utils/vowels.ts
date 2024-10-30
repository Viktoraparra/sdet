const VOWELS = ["a", "e", "i", "o", "u"];

export const countVowels = (text: string = ""): number => {
  const letters = text.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (VOWELS.includes(letters[i])) {
      count++;
    }
  }
  return count;
};
