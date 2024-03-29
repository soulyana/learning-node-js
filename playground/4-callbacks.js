// setTimeout(() => {
//     console.log('Two seconds are up');
// }, 2000)

// const names = ['Andrew', 'Jen', 'Soul', 'Jess'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data);
// });

// CHALLENGE - callback function
const add = (firstNum, secNum, callback) => {
    setTimeout(() => {
        const sum = firstNum + secNum;
        callback(sum);
    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum); // Should print 5
})