function* helper(){
    [a,b] = [0,1]
    while(true){
        yield a;
        [a,b] = [b,a+b]
    }
}

function* fibonacci(){
    const gen1 = helper()
    while(true){
        var num = gen1.next().value;
        if(num%2===0){
            yield num
        }
    }
    
}

const gen = fibonacci();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);