// task-1
const colors={
    red             :'#ff0000',
    green           :'#00ff00',
    blue            :'#0000ff',
    'golden rod'    :'#daa520'

}

const goldenColor=colors['golden rod'];
console.log(goldenColor)

// task-2
const car={
    make:'Toyota',
    mode:'Corolla',
    year:'2020'}
    car.passenger=6;
    console.log(car)
    
    
// task-3
const student={
    name    :"Hamim Sakep",
    id      :5421,
    physics :{
        subject:"HSC Physics",
        author :"Shahjahan Tapan",
        marks  :30
    }
}

const physicsMarks=student.physics['marks']
console.log(physicsMarks)

// task-4
let student2={
    name        :'Ariana Grande',
    age         :21,
    city        :'Gaibandha',
    isStudent   :true
}

const countProperty=Object.keys(student2).length;
console.log(countProperty)

