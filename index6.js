// ----------------------------------------------multiple ways to get and set object properties slide-------------------------------------------------------------------


// ----------------------------------------------dot notation-------------------------------------------------------------------

const person={
    name:'Asifa Jahan Safa',
    age:24,
    profession:'web-developer',
    isMarried:true,
    salary:350000
}

// get full object
console.log(person);
// get age property value
console.log(person.age);

// get name
const title=person.name;
console.log(title);

// get maritial status
const relationStatus=person.isMarried;
console.log(relationStatus)

// get salary
const income=person.salary;
console.log(income)

// change value with dot notation
person.isMarried=false,
console.log(person.isMarried);
console.log(person)
// ----------------------------------------------braket notation-------------------------------------------------------------------

const college={
    name:'Lalmatiya Government MOhila College',
    classes:[11,12,13,14,15,16],
    departments:['Chemistry','Physics','Math','Biology'],
    'department Teacher Names':{
       ' Head-of-Chemistry-depertment':'Abdul Rouf ',
        'Head-of-Physic-depertment':'Majhar ',
        'Head-of-biology-department':'tahera sirin',
        'Head-of-math-department':'Amin Sir',
   },

    'exams':{
       ' exam date':'27 May 2024',
       time:'10 a.m',
       marks:100
    }
}

console.log(college);
// get name

console.log(college.name);

// get departments
const faculty=college['departments'];
console.log(faculty);
const facultyHead=college[ 'department Teacher Names']['Head-of-biology-department'];
console.log(facultyHead)

// exam date
college['exams date']['time']='12 p.m';
const timeChange=college['exams date']['time'];
console.log(timeChange);
console.log(college)


// upadete teacher name
college['department Teacher Names']['Head-of-biology-department']='Jakia parvin';
console.log(college)

// another keyname
const keyname='departments';
console.log(college[keyname]);

// veriabele declare
const nameChange='name';
college[nameChange]='Dr Maleka College',
console.log(nameChange);
console.log(college);


