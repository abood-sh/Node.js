setTimeout(() => {
    console.log('Node.js');
}, 2000);

// setInterval(() => {
//     console.log('Node.js');
// }, 500);

let count = 0;
let id = setInterval(() => {
    count++;
    console.log('Express');
    if (count > 5) {
        clearInterval(id);
    }
}, 500);
console.log(id);
//! Classes
// class Blog {
//     name = 'Coddict';
//     url = 'coddict.co';

//     getName() {
//         return this.name;
//     }
//     get Name() {
//         return this.name;
//     }
//     set Name(n) {
//         if (n.length > 0)
//             this.name = n;
//     }
// }

// const bg = new Blog();
// console.log(bg.getName());
// console.log(bg.Name);
// bg.Name = 'New Blog';