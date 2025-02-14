const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

function reverse(arr) {
    const newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const reversedArr = reverse(arr);
console.log(reversedArr);

function double(arr) {
    const dubbz = [];
    for (let i = 0; i < arr.length; i++) {
        dubbz.push(arr[i] * 2);
    }
    return dubbz;
}

const doubleArr = double(arr);
console.log(doubleArr);

const mapDoubler = arr.map((item) => item * 2);
console.log(mapDoubler);
*/

function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
}
const newArr = [1, 2, 8, 1231234, 5];
reverseInPlace(newArr);
console.log(newArr);
