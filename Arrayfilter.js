let ages = [18,22,34,23,32];

function checkAdult(age){
    return age>18;
}

var result = ages.filter(checkAdult);

alert(result);
