// Массивы

// объявляю массив
var m = [10, 20, 'Hello'];

// добавляю новый элемент в массив
m[3] = 444;
m[4] = 444444;

// вывожу определенный элемент в консоль
console.log (m)

// вывожу количество элементов в массиве
// alert (m.length);

// вывожу каждый элемент массива в параграф
// for (var i=0; i<m.length; i++) {
// 	document.getElementById('out').innerHTML += m[i] + '<br>';
// }

// вывожу массив, но проще для машины, не запуская поиск нужного элемента на странице
function masOut() {
	
	var p = document.getElementById('out');
	var str = '';

	for (var i=0; i<m.length; i++) {
		str += i + '. ' + m[i] + '<br>';
	}

	p.innerHTML = str;

}
masOut();

// добавляю введенное значение в массив и вывожу его с изменениями
function push1() {

	var input = document.getElementById('input1').value;
	m.push(input);
	masOut();

}

// удаляю последний элемент массива и вывожу
function pop() {
	m.pop();
	masOut();
}