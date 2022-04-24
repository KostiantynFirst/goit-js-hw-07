import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('div.gallery');

galleryItems.map(el => {

    const galleryLink = document.createElement('a');
    const galleryItem = document.createElement('div');
    const galleryImage = document.createElement('img');


    galleryLink.classList.add('gallery__link');
    galleryItem.classList.add('gallery__item');

    galleryImage.classList.add('gallery__image');
    galleryImage.src = el.preview;


    galleryItem.append(galleryImage);
    galleryLink.append(galleryItem);
    
    gallery.append(galleryLink);
    return gallery;
})











