// сложение
function plus() {

	var num1, num2, result;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);

	result = num1 + num2;

	// вставляем результат в параграф
	document.getElementById('out').innerHTML = result;

}

// вычитание
function minus() {

	var num1, num2, result;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);

	result = num1 - num2;

	// вставляем результат в параграф
	document.getElementById('out').innerHTML = result;

}

// умножение
function multiply() {

	var num1, num2, result;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);

	result = num1 * num2;

	// вставляем результат в параграф
	document.getElementById('out').innerHTML = result;

}








