// ----------------------------------------------Reverse a String in Three different ways-------------------------------------------------

const sentence='I am working hard for my dreams.';
// console.log(sentence)

type:1;
let rev='';
for(let letter of sentence){
  rev=letter+rev

}

console.log(rev)


type:2
let reverce='';
for(let i=0;i<sentence.length;i++){
    // console.log(i);
    // console.log(sentence[i]);
    let letter=sentence[i];
    reverce=letter+reverce
}
console.log(reverce)

type:3

let invert=sentence.split('').reverse().join('');
console.log(invert)