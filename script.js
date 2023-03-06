//STEP-1//
var valueOne = document.getElementById("weightInput");
//STEP-2//
var valueTwo = document.getElementById("heightInput");
//STEP-3//
function bmiCalc(weight, height) {
  var bmi = Math.round(weight / (height * height));
  return bmi;
}
//STEP-4//
var valueThree = document.getElementById("btn");
valueThree.addEventListener("click", function () {
  var weight = document.getElementById("weightInput").value;
  var height = document.getElementById("heightInput").value;

  var bmi = bmiCalc(weight, height);

  document.getElementById("result").innerHTML = "Your BMI is = " + bmi;
  if (bmi < 18.5) {
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi + ", You are Underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("result").innerHTML =
      "Your BMI is " +
      bmi +
      ", You are in Normal weight. Keep Maintaining this.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("result").innerHTML =
      "Your BMI is " +
      bmi +
      ", You are Overweight. Try to do workout 2-3 days in week.";
  } else if (bmi > 30) {
    document.getElementById("result").innerHTML =
      "Your BMI is " +
      bmi +
      ", You are Obese. Try to do workout 5-6 days in week.";
  }
});
