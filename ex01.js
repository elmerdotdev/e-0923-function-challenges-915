/**
 * Create a function that accepts a parameter (fahrenheit) and converts it to celsius
 * 
 * function tempConverter(fahrenheit) {
 *   // YOUR CODE
 *   return celsius
 * }
 * 
 * console.log(tempConverter(30))
 */

function tempConverter(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return celsius
}

let temperature = tempConverter(120)
console.log(temperature)