function f1() {
	var n, p;
	n = document.getElementById('num1').value;
	n = parseInt(n);

	p = document.getElementById('out');

	if (n == 100) {
		p.innerHTML = ' число равно 100';
	} else if (n > 100) {
		p.innerHTML = ' число больше 100';
	} else {
		p.innerHTML = ' число меньше 100';
	}
}