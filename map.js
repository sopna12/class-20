const numbers = [2, 3, 4, 5, 6]
// const newNumbers = [4, 6, 8, 10, 12]



function double(numbersArray) {
    const newNumbers = [];
    for (const number of numbersArray){
            const doubled = number * 2
            newNumbers.push(doubled)
            console.log(newNumbers);

    }
    }
double(numbers)