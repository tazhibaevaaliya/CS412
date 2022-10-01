const helper = expression => {
    const [left, operator, right] = expression;
    if (operator === "+"){
        return parseInt(left)+parseInt(right);
    }
    else if (operator ==="-"){
        return parseInt(left)-parseInt(right);
    }
    else if (operator === "*"){
        return parseInt(left)*parseInt(right);
    }
    else if (operator === "/"){
        return parseInt(left)/parseInt(right);
    }
    else if (operator === "^"){
        return parseInt(left)**parseInt(right);
    }
    else{
        return parseInt(left)%parseInt(right);
    }
}

const evaluate = (expression, helper) => {
    return helper(expression);
}
const str = "4+2";
console.log(`The ${str} would be evaluated to ${evaluate(str,helper)}`);