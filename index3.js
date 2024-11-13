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


// -------------------------------------------------------join(join elements of an array into a single string in one line)--------------------------------------------------
const letter=['f','r','i','e','n','d','s'];

// auto separte with coma
const connect1=letter.join();
console.log(connect1)

// auto separte with hyphen
const connect2=letter.join('-');
console.log(connect2);

// auto separte with pipe
const connect3=letter.join('|');
console.log(connect3)



// auto separte without space
const connect4=letter.join('');
console.log(connect4)


// -------------------------------------------------------concat(join two or more arrays or strings together)--------------------------------------------------

const first='Safa';
const middle='Jahan';
const last='Asifa';
const fullName=first.concat(' ').concat(middle).concat(' ').concat(last);
console.log(fullName)



// -------------------------------------------------------includes(check if a certain element exists in an array or a substring exists within a string. )--------------------------------------------------

const food='rice';
const find=food.includes('d');
console.log(find)











