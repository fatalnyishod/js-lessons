var userNumber, programmNumber, out, tempOut;

// Math.random() — генерирует случайное число от 0 до 1 в виде дроби
// Math.floor — округляет число в меньшую сторону (6.4857 — 6)
// затем умножаем на 10, чтобы было целое число
//  прибавляем единицу чтобы компенсировать округление вниз
programmNumber = Math.floor(( Math.random() * 10 ) + 1);

// выводим сгенерированое число в тестовое поле
// tempOut = document.getElementById('tempOut');
// tempOut.innerHTML = programmNumber;
console.log(programmNumber);

function f1() {
	// берем вводимое юзером число
	userNumber = document.getElementById('userNumber').value;

	// берем параграф с подсказками
	out = document.getElementById('result');

	if (userNumber == programmNumber) {
		out.innerHTML = 'Угадал, красава';
	} else if (userNumber > programmNumber) {
		out.innerHTML = 'Чуть поменьше возьми';
	} else {
		out.innerHTML = 'Чуть побольше возьми';
	}

}