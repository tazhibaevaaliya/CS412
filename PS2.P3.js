const cubeNumber = x => {
    return x**3;
}

const arr = [1,2,3,4,5,6,7];
const cubeArray = arr.map(item =>{
    return cubeNumber(item);
})

console.log(`The result of applying the function cubeNumber of each element of ${arr} would be ${cubeArray}`);