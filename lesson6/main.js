function out() {
	
	var p;
	p = document.getElementById('out');

	// заменить содержимое параграфа
	p.innerHTML = 'Hello, world';

	// добавить к содержимому параграфа
	// ХТМЛ-теги обрабатываются
	p.innerHTML += ' <b>Hello, world</b>';
	
	// добавить к содержимому параграфа
	// ХТМЛ-теги НЕ обрабатываются
	p.innerText += ' <b>Hello, world</b>';

	// заменить сожержимое вместе с тегом
	p.outerHTML = '<div class="test">Hello, world</div>';

	// сложнее, но круче
	// добавить содержимое ПЕРЕД ХТМЛ-тегом — beforeBegin
	p.insertAdjacentHTML('beforeBegin', '<div class="test">It\'s test div here</div>');

	// добавить содержимое ПОСЛЕ ХТМЛ-тегом — afterBegin
	p.insertAdjacentHTML('afterBegin', 'Hi ');

	// добавить содержимое ПЕРЕД закрывающимся ХТМЛ-тегом — beforeEnd
	p.insertAdjacentHTML('beforeEnd', ' Hi');

	// добавить содержимое ПОСЛЕ закрывающегося ХТМЛ-тега — afterEnd
	p.insertAdjacentHTML('afterEnd', ' Hi');
}