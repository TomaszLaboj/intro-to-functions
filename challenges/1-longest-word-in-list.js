/**
 * find the longest word in an array, 
 * if more than 1 are the same length the one which occurs earlier is returned
 * @param {array} listOfWords- an array of strins
 * @returns {string} longestWord- the longest string in an array
 */


function longestInList(listOfWords){
    let longestWord = listOfWords[0];
    for(word of listOfWords){
        if(word.length>longestWord.length){
            longestWord = word;
        }
    }

    return longestWord;
}
console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), 'should be', "Northern Ireland")
console.log(longestInList(["the", "quick", "brown", "fox"]) ,'should be', "quick")
console.log(longestInList(["hello", "hi", "greetings", "hey"]) , 'should be', "greetings")
