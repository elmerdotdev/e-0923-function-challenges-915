
const calculate = (num1, num2, operation) => {
  let answer = ""
  if (operation == 'add') {
    answer = num1 + num2
  } else if (operation == 'subtract') {
    answer = num1 - num2
  } else if (operation == 'multiply') {
    answer = num1 * num2
  } else if (operation == 'divide') {
    answer = num1 / num2
  } else if (operation == 'power') {
    answer = num1 ** num2
  } else {
    answer = "unknown (incorrect operation used)"
  }
  return `SOLUTION: ${num1} ${operation} by ${num2} is ${answer}`
}

let result = calculate(2, 5, 'multiply')
console.log(result)