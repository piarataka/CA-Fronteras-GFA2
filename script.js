function mainCalc(operator){

    var num_value1 = parseFloat(document.getElementById("numberValue1").value);
    var num_value2 = parseFloat(document.getElementById("numberValue2").value);
    var finalNum;

    switch(operator){

        case "sum":
            finalNum = addition(num_value1, num_value2);
            break;
        case "subtraction":
            finalNum = subtraction(num_value1,  num_value2);
            break;
        case "product":
            finalNum = multiply(num_value1, num_value2);
            break;
        case "quotient":
            finalNum = divide(num_value1, num_value2);
            break;
        case "mod":
            finalNum = mod(num_value1, num_value2);
            break;
    }

    if(Number.isNaN(num_value1) || Number.isNaN(num_value2)){
        document.getElementById('results').innerHTML="Please input values muna po, excited ka masyado";
    }

    else{
        document.getElementById('results').innerHTML="The "+operator+" of "+num_value1+" and "+num_value2+" is "+finalNum;
    }
}

function addition(num1,num2){
    return num1+num2;
}

function subtraction(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function mod(num1, num2){
    return num1%num2;
}