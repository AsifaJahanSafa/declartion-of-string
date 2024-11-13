const country='Bangladesh';
const profession="Developer";
const city=`Dhaka`;
const university=new String('Lalmatiya Mohila College');
console.log(country);
console.log(typeof country);
console.log(profession);
console.log(typeof profession);
console.log(city);
console.log(typeof city);
console.log(university);
console.log(typeof university);


// Array is mutable(changable)

let numbers=[12,34,45,32];
console.log(numbers);

// get array element index number
console.log(numbers.length)

// get array element by index

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3])


// Change array element by its index"

numbers[0]=78;
console.log(numbers)

// that's why array is mutable


// ------------------------------------------------string is immutable( doesn't change)-------------------------------------------------------------------

const profession2="Developer";
console.log(profession2);


// Check the string element through its length property

console.log(profession2.length)

// Check the string element through its index

console.log(profession2[0]);
console.log(profession2[1]);
console.log(profession2[2]);
console.log(profession2[3]);
console.log(profession2[4]);
console.log(profession2[5]);
console.log(profession2[6]);
console.log(profession2[7]);
console.log(profession2[8])


// change index though string

profession2[2]='d'
console.log(profession2)
// doesn't change index.That's way string is immutable