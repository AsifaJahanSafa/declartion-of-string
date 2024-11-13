// -----------------------------------------------slice(extract a portion of an array or a string)------------------------------------------------

const fruit='Banana ';
const portion=fruit.slice(2,6);
console.log(portion)


// ------------------------------------------------------substring(extract a portion of a string between two specified indices.)----------------------------------------------------

const ornament='bring';
const part=ornament.substring(1);
console.log(part)


// ------------------------------------------------------split(divide a string into an array of substrings, based on a specified separator.)----------------------------------------------------

const sentence='I am a full-stack web developer';

// no separator was specified split
const divide1=sentence.split();
console.log(divide1);

// empty string separator specified split
const divide2=sentence.split('');
console.log(divide2);


// white space separator specified split
const divide3=sentence.split(' ');
console.log(divide3);


// a word separator specified split
const divide4=sentence.split('a');
console.log(divide4)