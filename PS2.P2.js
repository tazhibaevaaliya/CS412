const sentence = "All I know is something like a bird within her sang";

function* helper(string){
    var count = 0
    while(true){
        yield string[count];
        count+=1;
    } 
}

const emitEveryOtherWord = string => {
    const gen = helper(string);
    for(let i=0; i<string.length; i++){
        console.log(gen.next().value);
    }
}
emitEveryOtherWord(sentence.split(" "));