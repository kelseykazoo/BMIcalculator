document.querySelector("#calculate").addEventListener("click", cal);

function cal() {
    const weightInPounds = parseFloat(document.querySelector("#weight").value);
    const heightInCm = parseFloat(document.querySelector("#height").value);

    if (
        isNaN(weightInPounds) ||
        isNaN(heightInCm) ||
        weightInPounds <= 0 ||
        heightInCm <= 0
    ) {
        document.querySelector("#result").textContent =
            "Please enter valid positive numbers for weight and height.";
        return;
    }

    const weightInKg = weightInPounds * 0.453592;
    const heightInMeters = heightInCm / 100;

    const BMI = weightInKg / (heightInMeters * heightInMeters);

    let category;
    if (BMI < 18.5) {
        category = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        category = "Healthy weight";
    } else if (BMI > 24.9 && BMI <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.querySelector("#result").textContent =
        `Your BMI is ${BMI.toFixed(2)} (${category}).`;
}
