function checkNumber(num) {
	return num == 0 ? false : true;
}

function CheckBmi() {
	const weight = document.getElementById("weight").value;
	const height = document.getElementById("height").value;
	if(checkNumber(weight) && checkNumber(height)) {
		const bmi = (weight/Math.pow(height/100,2)).toFixed(1);
		let status;
		if(bmi>=30){
			status = "Obesity";
		}else if(bmi>=25 && bmi<30){
			status = "Overweight";
		}else if(bmi>=18.5 && bmi<25) {
			status = "Normal weight";
		}else if(bmi<18.5){
			status = "Underweight ";
		}else{
			status = "Not Found";
		}
		document.getElementById("hasil").innerHTML = "Your BMI is <b>"+bmi+"</b> wich means you are <b>"+status+"</b>";
	}
}