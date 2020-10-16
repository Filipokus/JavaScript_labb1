function sum(a, b) {
    const sum = a + b
    return sum
}

function myOwnMultiplyFunction(a, b) {
    const product = a * b
    return product
}

function isBelowZero(number) {
    if(parseInt(number)<0) return true
    else return false
}

function round(double) {
    return Math.round(double)
}

function addingUp(timesToAddUp){
    let integer = 0;
    for(i = 0; i < timesToAddUp; i++) integer = integer+(i+1)
    return integer
}

function findMinMax(arrayOfNumbers) {
    const arrayOfSortedNumbers = arrayOfNumbers.sort((a, b) => a - b);
    let min = arrayOfSortedNumbers[0]
    let max = arrayOfSortedNumbers[arrayOfNumbers.length-1]
    const arrayOne = new ArrayOfNumbers(max, min)
    return arrayOne
  }

  class ArrayOfNumbers {
    constructor(max, min) {
        this.max = max;
        this.min = min;
    }
}

function afterXmasEve2020(givenDate){
    let isAfterXmasEve2020 = false
    const xmasEve2020 = new Date('2020-12-24')
    const dateToCheck = new Date(givenDate)
    if(xmasEve2020 <= dateToCheck){
        isAfterXmasEve2020 = true;
    }
    console.log(xmasEve2020.toDateString())
    return isAfterXmasEve2020
}

function sortByStringLength(unorganizedArray){
    const organizedArray = unorganizedArray.sort((a, b) => a.length - b.length);
    return organizedArray
}

function charCounter(letter, string){
    let letterCount = 0
    for(let stringLetter of string){
        if(stringLetter.toLowerCase() === letter.toLowerCase()){
            letterCount++;
        }
    }
    return letterCount
}

function numbersOnly(arrayToFilter){
    let filteredArray = arrayToFilter.filter(item => item && typeof item === 'number' || item === 0)
    return filteredArray
}

function sortNumbers(arrayOfNumbersToSort, sortOrder){
    let arrayOfSortedNumbers
    if(parseInt(sortOrder) === 1){
        arrayOfSortedNumbers = arrayOfNumbersToSort.sort((a, b) => a - b);
    }
    else if(parseInt(sortOrder) === -1){
        arrayOfSortedNumbers = arrayOfNumbersToSort.sort((a, b) => b - a);
    }
    return arrayOfSortedNumbers
}

class personFactory {
    constructor(firstname, lastname) {
        this.firstname = capitalize(firstname);
        this.lastname = capitalize(lastname);
        this.fullname = capitalize(firstname) + ' ' + capitalize(lastname);
        this.initials = firstname[0].toUpperCase() + '.' + lastname[0].toUpperCase();
    }
}

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1, string.length)
}

function doublePrice(arrayOfCheapProducts){
    let arrayOfExpensiveProducts = new Array();
    for(let item of arrayOfCheapProducts){
        let newPrice = item.price * 2;
        const expensiveProduct = {name: item.name, price: newPrice}
        arrayOfExpensiveProducts.push(expensiveProduct);
    }
    return arrayOfExpensiveProducts
}

function and(value1, value2){
    if(value1 === true && value2 === true){
        return true;
    }
    return false
}

function removeLeadingTrailing(number){
let trimmed = '';
    if(typeof number === 'string'){
    trimmed = number.replace(/\b(0(?!\b))+/g, "");
    trimmed = Number(trimmed);
    }
    else if(typeof number === 'number'){
    trimmed = number.toString();
    trimmed = trimmed.replace(/\b(0(?!\b))+/g, "");
    trimmed = Number(trimmed);
    }
    return trimmed
}

function getKeysAndValues(unspecifiedObject){
    class KeysAndValues {
        constructor(unspecifiedObject) {
            this.keys = Object.keys(unspecifiedObject);
            this.values = Object.values(unspecifiedObject);
        }
    }
    const newObject = new KeysAndValues(unspecifiedObject)
    return newObject
}



module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
