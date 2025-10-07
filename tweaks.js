document.addEventListener('DOMContentLoaded', () => {
	for (const img of document.images) {
		if (img.hasAttribute('alt') && !img.hasAttribute('title')) {
			img.setAttribute('title', img.getAttribute('alt'));
		}
	}
});