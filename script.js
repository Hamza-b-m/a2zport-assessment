const vowels = ["a", "e", "i", "o", "u"];

const alphabetRegex = /[a-z]/i;

const longestWord = (sentence) => {
  if (sentence == null) {
    return "No sentence provided";
  }
  if (typeof sentence !== "string") {
    return "The sentence must be of type string";
  }
  if (sentence.length === 0) {
    return "The sentence cannot be empty";
  }
  const words = sentence.split(" ");
  const wordsWithInfo = words.map((word) => {
    const letters = word.split("");
    const result = letters.reduce(
      (acc, current) => {
        let length = acc.length;
        let vowelsNumber = acc.vowelsNumber;
        if (alphabetRegex.test(current)) {
          length++;
        }
        if (vowels.includes(current)) {
          vowelsNumber++;
        }

        return { word, length, vowelsNumber };
      },
      { word, length: 0, vowelsNumber: 0 }
    );

    return result;
  });

  const maxLength = Math.max(...wordsWithInfo.map((el) => el.length));

  const longestWords = wordsWithInfo.filter((el) => el.length === maxLength);

  if (longestWords.length > 1) {
    const maxVowelsNumber = Math.max(
      ...longestWords.map((el) => el.vowelsNumber)
    );
    const result = longestWords.find(
      (el) => el.vowelsNumber === maxVowelsNumber
    );
    return result.word;
  }
  return longestWords[0].word;
};

/* ------------------------------- scenario 1 ------------------------------- */
//check undefined input
const scenario_1 = undefined;

console.log(longestWord(scenario_1));
//expected result: "No sentence provided"

/* ------------------------------- scenario 2 ------------------------------- */
//check null input
const scenario_2 = null;

console.log(longestWord(scenario_2));
//expected result: "No sentence provided"

/* ------------------------------- scenario 3 ------------------------------- */
//check other type input
const scenario_3 = ["test"];

console.log(longestWord(scenario_3));
//expected result: "The sentence must be of type string"

/* ------------------------------- scenario 4 ------------------------------- */
// check if the function ignore any character in the sentence that is not an English letter or a space
const scenario_4 =
  "hdzljéçà__ç46846jkqi hej *ùm$êifhcqttecjhcegadif iùoôh5çàhydcjsu &'-&86jhgtzaodnvsrjieiuuh";

console.log(longestWord(scenario_4));
// Longest words are *ùm$êifhcqttecjhcegadif and &'-&86jhgtzaodnvsrjieiuuh, but the second has the most vowels
//expected result: "&'-&86jhgtzaodnvsrjieiuuh"

/* ------------------------------- scenario 5 ------------------------------- */
const scenario_5 =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

console.log(longestWord(scenario_5));
// Longest words are “everything” and “experience”, but the second has the most vowels
//expected result: "experience"
