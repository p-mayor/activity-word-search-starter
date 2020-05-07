// COMPLETE THE TODOs BELOW...
// Note: The primary TODOs for this Activity will not require 
// you to edit the HTML or CSS.

// On our HTML page, we have a #search-button, a #textbox input,
// box a #sentence, and a #search-results DIV.

// TODO 1: Use querySelector to assign EACH of the above 
// elements to a variable, just like this:
let searchButton = document.querySelector('#search-button')
let textboxElement = document.querySelector('#textbox')
let sentenceElement = document.querySelector('#sentence')
let searchResultsElement = document.querySelector('#search-results')

searchButton.addEventListener('click', function () {
 
  let userSuppliedString = textboxElement.value.trim().toLowerCase()
  // let sentenceString = regex(sentenceElement.innerHTML.toLowerCase())
  let sentenceString = sentenceElement.innerHTML.toLowerCase()

  if (sentenceString.includes(userSuppliedString)) {
    searchResultsElement.innerHTML = "A match was found"
  } else {
    searchResultsElement.innerHTML = "No results. Too bad!"
  }

  let wordsArray = sentenceString.split(" ")
  
  let counter = 0
  let wordCount = 0
  sentenceElement.innerHTML = ""
  while(counter < wordsArray.length){
    let currentWord = wordsArray[counter]
    if(currentWord.includes(userSuppliedString)){
      wordCount+=1
      sentenceElement.innerHTML += "<mark>"+ " " + currentWord + " "+"</mark>"
    } else {
      sentenceElement.innerHTML += " " + currentWord + " "
    }
    counter+=1
  }
  searchResultsElement.innerHTML += " Count: "+ wordCount
  
})

// function regex (str) {
//   return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
// }

// STRETCH GOALS (easiest to hardest):
//
//  • Customize the CSS to your liking.
//  • Use .trim() to remove unnecessary whitespace from the
//    user-supplied string.
//  • Use .toLowerCase() on both the sentence and the user-
//    supplied string, so that your word search is 
//    NOT case-sensitive.
//  • Count the number of times the word appears.
//  • Display the word count for the user.
//  • Find a way to highlight the matching word(s). 
//    Hint: .split() and Iteration.
