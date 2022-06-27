//! Array
let techs = ['html', 'css', 'js'];

console.log(techs);
techs.push('express');
console.log(techs);
techs = ['node.js', ...techs, 'npm'];
console.log(techs);
techs[6] = 'hello';
console.log(techs);
techs.splice(6, 1);
console.log(techs);

let x = [5, 'hello', true, null];

console.log(x);
let y = [4, 6, 49, 29, 124, 58, 33];
console.log(y.filter(i => i > 30));

for (let i of y) {
    console.log(i);
}
y.forEach(i => i = i + 5)
console.log(y);

//! Data Types
// let x = 839748934738947389473847384973489;
// console.log(x);
// console.log(typeof x);

// let y = 839748934738947389473847384973489n;
// console.log(y);
// console.log(typeof y);

//! string
// x = 5;
// y = 7;
// console.log('Point: (' + x + ', ' + y + ')');
// console.log(`Point: (${x}, ${y})`);

//! Power
// const power = (x, y) => {
//     let p = 1;
//     for (let i = 0; i < y; i++) {
//         // p = p * x;
//         p *= x;
//     }

//     return p;
// };

// let res = power(2, 10);
// console.log(res);

//! Functions
// function showHello() {
//     console.log('Hello');
// }

// const myHello = showHello;

// showHello();
// myHello();

// const showMessage = msg => 'Hello ' + msg;
// const test = a => a * 10;
// const test2 = () => 10 * 10;
// const test3 = (a, b) => a * b;
// const test4 = (a, b) => {
//     console.log(a);
//     console.log(b);
//     return a + b;
// };

// const changeMsg = showMessage;

//! Variables
// x = 16;
// // y = 11;
// const z = 120;
// z = 12;
// var x = 5;
// // let y = 15;


// var x = 10;
// let y = 12;


// var std = {
//     id: 10,
//     name: 'Mohammad Dabbor',
//     age: 23,
//     bio: 'lajfd lakdfjladskjfl asdlfkjdsf lakdjf lasdkjf asdlfkjads flkj dflkj dasl;fkj dlkfaj dslkfj lk;sdjf klsdjf lksadkjf lkdsajf lksdjf lkajfsdlkfj adslfkj dsklfj lkdsjfa ldfj lksdjf klsjdf alkdsjf lkadsj flkdasjf ldksfj laksdf jlaksdjf kldfj alksdfj lk;afj dslkfj daklsfj dklsfj lkadsfj kldsafj ldsafj lkdfsja lkasdj fkld'
// };

// console.log(std);

// console.log('Hello Node.js!!');
// console.log('Hello Node.js!!');
// console.log('Hello Node.js!!');
// console.log('Hello Node.js!!');

// console.log(x);