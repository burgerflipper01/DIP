//Opgave 1.2
let list1 = ["a", "c", "b", "d", "f", "e"];
for (let i = list1.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list1[j] > list1[j + 1]) {
            let temp = list1[j];
            list1[j] = list1[j+1];
            list1[j+1] = temp;
        }
    }
}
console.log(list1.toString()); // => a,b,c,d,e,f



//Opgave 1.3 Binary Search
function binarySearch(list, target){
    let index = -1;
    let left = 0;
    let right = list.length - 1;
    while (index === -1 && left <= right){
        let middle = Math.floor((left + right) / 2);
        if (list[middle] === target){
            index = middle;
        } else if (list[middle] > target){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return index;
}

//returnere 1 hvis tallet findes, returnere -1 hvis tallet ikke findes
console.log(binarySearch(list1,"b"))



let listOne = [1,3,5,7]
let listTwo = [2,3,4,8,10]


function totalFlet(list1, list2){
    let listToAdd = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < list1.length && i2 < list2.length){
        if (list1[i1] < list2[i2]){
            listToAdd.push(list1[i1]);
            i1++;   
        }
        else{
            listToAdd.push(list2[i2]);
            i2++;
        }
    }
    while(i1 < list1.length){
        listToAdd.push(list1[i1])
        i1++;
    }
    while(i2 < list2.length){
        listToAdd.push(list2[i2]);
        i2++;
    }
    return listToAdd;

}

console.log(totalFlet(listOne,listTwo));





function isPrime(number){
    let isP = true;
// check if number is equal to 1
    if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
// check if number is less than 1
    else {
    console.log("The number is not a prime number.");
}
}

console.log(isPrime(7))



