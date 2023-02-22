var inputData = document.getElementById("inputData")
var outputData = document.getElementById("outputData")
var inputUnit = document.getElementById("inputUnit")
var outputUnit = document.getElementById("outputUnit")

function calculate(){

if (inputUnit.value=="cm" && outputUnit.value=="cm"){
    var result = 0
    result = inputData.value * 1
    outputData.value = result
}
else if(inputUnit.value=="cm" && outputUnit.value=="inch"){
    var result = 0
    result = inputData.value * 0.393701
    outputData.value = result
}
else if(inputUnit.value=="cm" && outputUnit.value=="ft"){
    var result = 0
    result = inputData.value * 0.0328084
    outputData.value = result
}
else if(inputUnit.value=="cm" && outputUnit.value=="km"){
    var result = 0
    result = inputData.value / 100000
    outputData.value = result
}
else if(inputUnit.value=="inch" && outputUnit.value=="cm"){
    var result = 0
    result = inputData.value * 2.54
    outputData.value = result
}

else if(inputUnit.value=="inch" && outputUnit.value=="inch"){
    var result = 0
    result = inputData.value * 1
    outputData.value = result
}
else if(inputUnit.value=="inch" && outputUnit.value=="ft"){
    var result = 0
    result = inputData.value / 12
    outputData.value = result
}

else if(inputUnit.value=="inch" && outputUnit.value=="km"){
    var result = 0
    result = inputData.value / 39370
    outputData.value = result
}
else if(inputUnit.value=="ft" && outputUnit.value=="cm"){
    var result = 0
    result = inputData.value * 30.48
    outputData.value = result
}
else if(inputUnit.value=="ft" && outputUnit.value=="inch"){
    var result = 0
    result = inputData.value * 12
    outputData.value = result
}
else if(inputUnit.value=="ft" && outputUnit.value=="ft"){
    var result = 0
    result = inputData.value * 1
    utputData.value = result
}
else if(inputUnit.value=="ft" && outputUnit.value=="km"){
    var result = 0
    result = inputData.value / 3281
    outputData.value = result
}

else if(inputUnit.value=="km" && outputUnit.value=="cm"){
    var result = 0
    result = inputData.value * 100000
    outputData.value = result
}
else if(inputUnit.value=="km" && outputUnit.value=="inch"){
    var result = 0
    result = inputData.value * 39370.1
    outputData.value = result
}
else if(inputUnit.value=="km" && outputUnit.value=="km"){
    var result = 0
    result = inputData.value * 1
    outputData.value = result
}
else if(inputUnit.value=="km" && outputUnit.value=="ft"){
    var result = 0
    result = inputData.value * 3281
    outputData.value = result
}
}
function clearData(){
inputData.value = ""
inputUnit.value = ""
outputData.value = ""
outputUnit.value = ""
}