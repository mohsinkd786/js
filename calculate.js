const calculate = () =>{
    //console.log(`calculate() called`);
    const first = parseInt(document.getElementById('first').value);
    const next = parseInt(document.getElementById('next').value);
    const operand = document.getElementById('operand').value;
    let result = 0;
    const calculator = new Calculator();
        
    switch(operand){
        case 'add':
        //result = `Sum is  , ${calculator.add(first,next)}`;
        // making static method calls
        result = `Sum is , ${StaticCalculator.add(first,next)}`;
        break;
        
        case 'diff':
        result = `Difference is , ${calculator.subtract(first,next)}`;
        break;
        
        case 'mul':
        result = `Product is , ${calculator.multiply(first,next)}`;
        break;
        
        case 'div':
        let esCal = new ESCalculator();
        result = `Division is , ${esCal.division(first,next)}`;
        break;

        default:
        result = 0;
    }
    // end of switch
    const resultant = document.getElementById('result');
    // set the calculated value
    resultant.innerHTML = result;
}
// calculator class
class Calculator{
    // addition
    add(first,next){
        return first + next;
    }
    // difference
    subtract(first,next){
        return first - next;
    }
    //product
    multiply(first,next){
        return first * next;
    }
}
//
class StaticCalculator{
    static add(first,next){
        return first + next;
    }
}

// ES6 style
const ESCalculator = class {
    division(first,next){
        return first / next;
    }
}