/**
 * given a full message and a list of words,
 returns a single string that represents a 'censored' version of the original message:
 all words from the list will be scrubbed out and replaced with five asterisks (*****)

 @param {string} message - original message to be 'censored'
 @param {array} listOfWords - list of words to search and censor
 @returns {string} censoredMessage
 */

function censorMessage(message, listOfWords) {
  const rawWords = message.split(" ");
  const scrubbedWords = [];
  for (const word of rawWords) {
    if (listOfWords.includes(word.toLowerCase())) {
      scrubbedWords.push("*****");
    } else {
      scrubbedWords.push(word);
    }
  }
  const scrubbedMessage = scrubbedWords.join(" ");

  return scrubbedMessage;
}
console.log(
  censorMessage("don't mess with cats", ["mess"]),
  "should be ",
  "don't ***** with cats"
);
console.log(
  censorMessage("Are you sure that this is safe", ["are", "is"]),
  "should be ",
  "***** you sure that this ***** safe"
);
console.log(
  censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]),
  "should be ",
  "I CANNOT ***** *****"
);
