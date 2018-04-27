function f1() {
	var p = document.getElementById('out');

	// цикл с заданным количеством повторений
	for ( var i=1; i<=100; i++ ) {
		p.innerHTML += i + ' ';
	}
}