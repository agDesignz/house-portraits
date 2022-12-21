(() => {
    'use strict';

    const galContainer = document.querySelector('.gallery__container');
    const lightbox = document.querySelector('.lightbox');
    const lightboxContainer = document.querySelector('.lightbox__container');
    const btnCloseLight = document.querySelector('.lightbox__close');

    const lightShow = function (e) {
        const clicked = e.target;
        if(!clicked) return;
        document.body.style.overflow = 'hidden';
        if (lightboxContainer.classList.contains('out')) lightboxContainer.classList.remove('out');   
        lightbox.classList.remove('lightbox--hidden');
        const lightImg = document.createElement('img');
        lightImg.classList.add('lightbox__img');
        lightImg.src = clicked.src.replace('gal', 'print');
        if (lightboxContainer.querySelector('img')) {
            lightboxContainer.removeChild(lightbox.querySelector('img'))
        }
        lightboxContainer.appendChild(lightImg);

    };

    const lightsOut = () => {
        const lightImg = document.querySelector('.lightbox__img');
        lightboxContainer.classList.add('out');      
        setTimeout(() => {
            lightImg.style.display = 'none';
            lightbox.classList.add('lightbox--hidden');
            document.body.style.overflow = 'auto';
            lightboxContainer.removeChild(lightImg);
        }, 100); 
    };

    galContainer.addEventListener('click', lightShow);

    lightbox.addEventListener('click', function (e) {
        if (e.target !== e.currentTarget)
        return;
        lightsOut();
    });
    btnCloseLight.addEventListener('click', function (e) {
        if (e.target !== e.currentTarget)
        return;
        lightsOut();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !lightbox.classList.contains('lightbox--hidden')) {
            lightsOut();
        }
    });

})();