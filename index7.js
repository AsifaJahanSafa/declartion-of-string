// know how many object are in object

// Object er vitor key jante
const computer={
brand:'lanovo',
hdd:'810 gb',
price:68000,
monitor:'hp',
processor:'intel'
}
console.log(computer);


console.log(computer);
//know keyname
const keyname=Object.keys(computer);
console.log(keyname)


// know values
const value=Object.values(computer);
console.log(value);


// nasted object

const school={
    name:'VNC',
    class:[1,2,3,4,5,6,7,8,9,10,11,12],
    events:['science fair','bijoy dibosh','21 february'],
    unique:{
        color:'blue',
        result:{
            merit:'top',
           gpa:5    
        }
    }

}

console.log(school);
const speciality=school.unique['color'];
console.log(speciality);

school.unique.result.merit='top top top most',
console.log(school);

school.events[1]='16 december',
console.log(school)

// to delete any property
 delete school.class;
 console.log(school)