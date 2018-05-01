document.getElementById('sliderLeft').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
	var line = document.getElementById('line');
	left = left - 128;
	
	if (left < -256) {
		left = 0;
	}
	
	line.style.left = left + 'px';
}