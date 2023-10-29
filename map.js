const numbers = [2, 3, 4, 5, 6]
// const newNumbers = [4, 6, 8, 10, 12]



function double(numbersArray) {
    const newNumbers = [];
    for (const number of numbersArray){
            const doubled = number * 2
            newNumbers.push(doubled)
            // console.log(newNumbers);

            
    }
    return newNumbers;

}
const newArray = double(numbers)
// console.log('stored at newArray',newArray);



// Map

// const storedFromMap = numbers.map(num => {
//     return num + 2
// })
// console.log('stored from map',storedFromMap);

const names = [ 'Sajal', 'Dipu', 'Rohul', 'Habiba']

names.map(name => {
    if (name === 'habiba'){
        // console.log(name + ' ' + 'khan shaheban');
    }
   else {
    // console.log(name + ' ' + 'khan shaheb');
   }

})


// more map
const shop = [
    { mobile: 'Oppo', price: 20000, model: 'f7' },
    { mobile: 'Iphone', price: 50000, model: '13' },
    { mobile: 'samsung', price: 10000, model: 'a34' },
    { mobile: 'vivo', price: 9000, model: 'y16' },


]
const greaterThan10000 = shop.filter(gadget => gadget.price > 10000)
console.log(greaterThan10000);



const storedmodels = shop.map(gadget => gadget.model)
const storedPrice = shop.map(gadget => gadget.price)
const storedMobile = shop.map(gadget => gadget.mobile)
// console.log(storedmodels);
// console.log(storedMobile);
// console.log(storedPrice);