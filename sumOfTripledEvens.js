function sumOfTripledEvens(array) {
    const evenNums = array.filter((num) => num % 2 == 0);
    const evensMultiplied = evenNums.map((num) => num * 3);
    const addMults = evensMultiplied.reduce((total, currentItem) => total + currentItem, 0);
    return addMults
}

myArray = [1,4,7,3,5,7,8,6,9,3,2,4,6,5,3,5,7,7,5,2456,25,3245,544,5,88]
const result = sumOfTripledEvens(myArray);
console.log(result);

/*We need to perform an operation only on the even numbers.
We need to transform those numbers by multiplying them by 3.
Finally, we need to add the result up from the previous transformation. */