const mobile={
    band:'samsung',
    price:30000,
    isNew:true,
    camera:'64mp'
}
// for loop in object 
// in object   for in is used;
// in array  for of is used;


console.log(mobile);
// rule:1
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop])
}

// const key 
// rule-2
const keys=Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,':',mobile[key])
}

const pen={color:'black',price:'10tk',brand:'matador'};
// create  object
// type:1
const pencil=new Object();
console.log(pencil)

// type:2
const rubber=Object.create({});
console.log(rubber)
