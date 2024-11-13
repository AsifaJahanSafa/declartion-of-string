// --------------------------------------Mix string---------------------------------------------------
const university='Lal maTiya GoverNmenT MoHIla CollAGE';
console.log(university);

// /for uppercase

console.log(university.toUpperCase());

// /for lowercase

console.log(university.toLowerCase())

// conditionals with mix case

const subject='Chemistry';
const book='chemistry';

if( subject.toLowerCase() === book.toLowerCase() ){
    console.log('I study  Chemistry')
}else{
    console.log('what is chemistry')
}



// ---------------------------------------trim---------------------------------------------------------

const drink=' water';
const liquid='         water';

if(drink.trim === liquid.trim){
    console.log('I drink it')
}else{
    console.log('this is dirty')
}