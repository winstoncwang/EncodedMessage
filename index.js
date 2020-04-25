const input = document.querySelector('.input-message');
const sharedLink = document.querySelector('.share-message');

const inputBlock = document.querySelector('#input-form');
const sharedBlock = document.querySelector('#share-block');
const inputshowBlock = document.querySelector('#inputshow');

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const baseEncoded = btoa(input.value);
	sharedLink.value = `${window.location}#${baseEncoded}`;

	sharedBlock.classList.remove('hide');
	inputBlock.classList.add('hide');

	sharedLink.select();
});

const { hash } = window.location;
const hiddenMessage = atob(hash.replace('#', ''));
if (hiddenMessage) {
	inputBlock.classList.add('hide');
	inputshowBlock.classList.remove('hide');
	document.querySelector('h2').innerText = hiddenMessage;
}
