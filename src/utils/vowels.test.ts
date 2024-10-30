import { countVowels } from "./vowels";

describe("vowels", () => {
  describe("countVowels", () => {
    test("finds 0 vowels in empty input", () => {
      expect(countVowels()).toEqual(0);
      expect(countVowels("")).toEqual(0);
    });

    describe.each([
      { word: "delicious", vowels: 5 },
      { word: "expected", vowels: 3 },
      { word: "Unexpected", vowels: 4 },
    ])('countVowels("$word")', ({ word, vowels }) => {
      test(`returns ${vowels}`, () => {
        expect(countVowels(word)).toEqual(vowels);
      });
    });
  });
});
