let Click = document.getElementById('click');
let resultDiv = document.getElementById('resultDiv');
let weightInput = document.getElementById('weightInput')
let heightInput = document.getElementById('heightInput')
let DisplayDiv = document.getElementById('DisplayDiv');


// const BMI = (weightInput.value / (heightInput.value * heightInput.value)).toFixed(2);
    const calculate = () => {
    const weight = weightInput.value;
    const height = heightInput.value;
    const bmi = weight / (height * height);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        DisplayDiv.innerHTML = "Please input valid values"
    } else if (bmi < 18.5) {
        DisplayDiv.innerHTML = "You are underweight"
    } else if (bmi > 24.9) {
        DisplayDiv.innerHTML = "You are overweight"
    } else {
    DisplayDiv.innerHTML = "You are in the healthy range"
    }

        return bmi.toFixed(2);
    }

    Click.onclick = () => {
        resultDiv.innerHTML = calculate();

        
}

