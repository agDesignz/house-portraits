(() => {
    'use strict';

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    [...document.querySelectorAll('.gallery__img')].forEach(img => {
        img.addEventListener('click', (e) => {
            document.body.style.overflow = 'hidden';
            console.log(e.target.src);
            lightbox.classList.add('active');
            const lightImg = document.createElement('img');
            lightImg.classList.add('lightbox__img');
            lightImg.classList.add('up');
            lightImg.src = e.target.src.replace('gal', 'print');
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(lightImg);
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget)
            return;
        const lightImg = document.querySelector('.lightbox__img');
        lightImg.classList.add('out');      
        setTimeout(() => {
            lightImg.style.display = 'none';
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 100); 
    });

})();