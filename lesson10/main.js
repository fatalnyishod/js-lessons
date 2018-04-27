function f1() {
	var p = document.getElementById('out');
	var p1 = document.getElementById('out1');

	// цикл с предусловием
	var i = 0;
	while ( i < 50 ) {
		i++;
		p.innerHTML += i + ' ';		
	}

	// цикл с постусловием
	var j = 100;
	do {
		p1.innerHTML += j + ' ';
		j = j - 2;
	} while ( j > 0 );
}