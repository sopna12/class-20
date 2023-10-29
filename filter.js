// filter - return an array with the value we want 
const numbers = [2, 4, 10, 12, 50, 100, 150]
const names = ['sajal', 'dipu', 'rohul', 'habiba']
const lessThan10 = numbers.filter(num => num <= 10)
const greaterThan10 = numbers.filter(num => num >= 10)
 const filteredName = names.filter(name => name != 'dipu')




console.log(lessThan10);
console.log(greaterThan10);
console.log(filteredName);