
const countdown = function(number) {
  let count = ""
  for (let i = number; i >= 0; i--) {
    count += i + " \n"

    if (i == 0) {
      count += "GOOD DAY!"
    }
  }
  return count
}

console.log(countdown(10))