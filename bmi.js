
var Click = document.getElementById('click');
var resultDiv = document.getElementById('resultDiv');
var weightInput = document.getElementById('weightInput');
var heightInput = document.getElementById('heightInput');
var DisplayDiv = document.getElementById('DisplayDiv');

const calculate = () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / (height * height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        DisplayDiv.innerHTML = "Please input valid values";
    } else {
        const bmi = weight / (height * height);
        if (bmi < 18.5) {
            DisplayDiv.innerHTML = "You are underweight";
        } else if (bmi > 24.9) {
            DisplayDiv.innerHTML = "You are overweight";
        } else {
            DisplayDiv.innerHTML = "You are in the healthy range";
        }
        return bmi.toFixed(2);
    }
}

Click.onclick = () => {
    resultDiv.innerHTML = calculate();
}
