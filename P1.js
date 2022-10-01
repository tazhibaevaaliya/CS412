function reverseOrder(s){
    return ([...s].sort().reverse()).join("");
};
const str = "supercalifragilisticexpialidocious";
console.log(`The string ${str} in reverse alphabetical order is ${reverseOrder(str)}`);