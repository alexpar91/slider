
let images = document.querySelectorAll('.slider__inner-item');

let current = 1;

let buttonNext = document.querySelector('.next');
buttonNext.onclick = function next() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('opacity1');
	}
	images[current].classList.add('opacity1');

	if (current == images.length - 1) {
		current = 0;
	}
	else {
		current++;
	}

}

let buttonPrev = document.querySelector('.prev');
buttonPrev.onclick = function prev() {
	if (current == 1) {
		current = images.length;
	}
	else {
		current--;
	}

	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('opacity1');
	}
	images[current - 1].classList.add('opacity1');

};


