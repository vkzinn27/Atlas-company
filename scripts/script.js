const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const price = this.getAttribute('data-price');
        const image = this.getAttribute('data-image');

        Swal.fire({
            title: title,
            text: `Preço: ${price}`,
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: title,
            confirmButtonText: 'Adicionar ao carrinho',
            customClass: {
                confirmButton: 'my-confirm-button',
              }
        });
    });
});

let cartCount = 0;

document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const price = this.getAttribute('data-price');
        const image = this.getAttribute('data-image');

        Swal.fire({
            title: title,
            text: `Preço: ${price}`,
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: title,
            confirmButtonText: 'Adicionar ao carrinho',
            customClass: {
                confirmButton: 'my-confirm-button',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                cartCount++;
                document.querySelector('.cart-badge').textContent = cartCount;
            }
        });
    });
});
