const daftarProduct = document.querySelectorAll('.swiper-slide');

daftarProduct.forEach(function(btn){
    btn.addEventListener('click', function(e){
            anime({
                targets : '.logo',
                opacity : 0,
                duration : 1000,
            })
    });
});