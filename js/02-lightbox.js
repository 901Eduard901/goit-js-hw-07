import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.innerHTML = markup;

function createMarkup(data) {
  return data
    .map(( {preview, original, description} ) => {
      return `<a class="gallery__item" href="${original}">
              <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
              />
            </a>`
  })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionDelay: 250, 
    scrollZoom: false,
    disableRightClick: true,
});