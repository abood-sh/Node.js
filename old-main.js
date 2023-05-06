console.log('Async Operations...');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

sleep(5000)
    .then(() => {
        console.log('5s passed');
    });

console.log('End of app');

// function sleep(ms) {
//     const pr = new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }

// setTimeout(() => {
//     console.log('5s later...');
// }, 5000);