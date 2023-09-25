/** 
 * Create a function compliment() accepts two arguments (name and age) and prints a specific line of text depending on if age is greater than 18 years old
 *
 * Pseudocode:
 * If age is below 18, print "You are still young, John!"
 * If age is 18 and up, print "You are an adult, John!"
 * 
 * 
 * function compliment(name, age) {
 * 
 * }
 * 
 * console.log(compliment('John', 30))
 */

function compliment(name, age) {
  if (age < 18) {
    return `You are still young, ${name}!`
  } else {
    return `You are an adult, ${name}!`
  }
}

let message = compliment("John", 18)
console.log(message)
