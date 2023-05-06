// Promises
// Convert callback functions to Promise based

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    try {
        await sleep(5000);
        console.log('5s passed');

        await sleep(2000);
        console.log('2s passed');
    } catch (err) {
        console.log(err);
    }
}
main();