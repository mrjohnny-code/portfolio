'use strict'

document.addEventListener("DOMContentLoaded", () => {
	imageSize()
	lightbox.init();
})

function imageSize() {

	function setImageDimensionsForPhotoswipe(linkElement) {
		const img = new Image()

		img.src = linkElement.getAttribute('href')

		img.onload = function() {
			const width = img.naturalWidth
			const height = img.naturalHeight

			linkElement.setAttribute('data-pswp-width', width)
			linkElement.setAttribute('data-pswp-height', height)
		}
	}

	const imageLinks = document.querySelectorAll('.pswp-gallery .pswp-item')

	imageLinks.forEach(link => {
		setImageDimensionsForPhotoswipe(link)
	})
}

const lightbox = new PhotoSwipeLightbox({
	gallery: '.pswp-gallery',
	children: 'a',
	pswpModule: PhotoSwipe,
	wheelToZoom: true,
	showAnimationDuration: 250,
	hideAnimationDuration: 250,
	padding: { top: 20, bottom: 20, left: 40, right: 40 }
})