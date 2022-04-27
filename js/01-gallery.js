import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector('div.gallery');


galleryItems.map(el => {
    
    const galleryItem = document.createElement('div');
    const galleryLink = document.createElement('a');
    galleryLink.href = el.original;

    const galleryImage = document.createElement('img');

    galleryLink.classList.add('gallery__link');
    galleryItem.classList.add('gallery__item');

    galleryImage.classList.add('gallery__image');
    galleryImage.src = el.preview;
    galleryImage.dataset.sourse = el.original;
    galleryImage.alt = el.description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);
    
    gallery.append(galleryItem);
    return gallery;
});


gallery.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    basicLightbox.create(`
        <img src=${e.target.dataset.sourse} width="800" height="600">
`, {
        onShow: (e) => {
            
        window.addEventListener("keydown", (event) => {
            if (event.code === "Escape") { 
                e.close(); 
                } 
        }, {once: true})
        }
    }).show();
    
});
   











