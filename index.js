const input = document.querySelector('.input-message');
const sharedLink = document.querySelector('.share-message');

const inputBlock = document.querySelector('.input-container');
const sharedBlock = document.querySelector('.share-link');

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const baseEncoded = btoa(input.value);
	sharedLink.value = `${window.location}#${baseEncoded}`;
	sharedLink.value.selected();
	sharedBlock.classList.remove('hide');
	inputBlock.classList.add('hide');
});
