/** @format */

const bulb = document.querySelector('.off');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
	bulb.classList.toggle('bulb');
	bulb.classList.toggle('animate__fadeOut');
});
