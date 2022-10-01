const s1 = "supercalifragilisticexpialidocious";
const s2 = "supercalifragilisticexpialidocious";
const connector = (str, decorator_f) => {
    return decorator_f(str);
}
const brokenOnC = str => {
    const splitted = str.split("c");
    const [first,...rest] = splitted;
    const newArray = [first].concat(rest.map(item =>{
        return "c"+item;
    }));
    
    return newArray;
}

const replaceA = str => {
    const modified = str.replace(/a/g,"A");
    return {
        originalString:str,
        modifiedString:modified,
        numberReplaced: (modified.match(/A/g)).length,
        length: str.length,
    };
}

console.log(`The string ${s1} has been split into fragments of ${connector(s1,brokenOnC)}`);
console.table(connector(s2,replaceA));



