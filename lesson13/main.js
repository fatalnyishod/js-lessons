var left = 0;
var timer;

// автозапуск смещения
function autoSlider() {
	timer = setTimeout(function() {
		var line = document.getElementById('line');
		left = left - 128;
		
		if (left < -256) {
			left = 0;
			clearTimeout(timer);
		}
		
		line.style.left = left + 'px';
		autoSlider();
	}, 1000);
}
autoSlider();