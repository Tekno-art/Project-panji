const daftarProduct = document.querySelectorAll('.swiper-slide');
let home = document.querySelector('.besar');
let kontainerModalUtama = document.querySelector('.model-utama img');
let judul = document.querySelector('.judul-product h1');
let text = document.querySelectorAll('.text');
daftarProduct.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(e.target.className === 'img'){
            kontainerModalUtama.src = e.target.src;
        }

         anime({
                targets : '.kotak',
                keyframes: [
                    {height: '90vh', top : '5%'},
                    {height: '0vh', top: '90%'}
                ],
                easing : 'linear',
                duration : 800,
                direction : 'reverse'
            })
            anime({
                targets : '.logo, .icon',
                top : '-5%',
                opacity : 0,
                duration : 500,
                delay : 700,
                easing : 'linear'
            })
            anime({
                targets : ' .keterangan',
                keyframes : [
                    { left : '30%'},
                    {left : '35%', opacity: 0, easing: 'linear'}
                ],
                duration : 1000,
                delay : 700,
            })
            anime({
                targets : ' .social-icon',
                keyframes : [
                    { right : '30%'},
                    {right : '35%', opacity: 0, easing: 'linear'}
                ],
                duration : 1000,
                delay : 700,
            })
            anime({
                targets : '.swiper-slide',
                translateY : anime.stagger(-50),
                opacity : 0,
                duration : 500,
                delay: 2000,
                easing : 'linear'
            })
            anime({
                targets : '.model , .h2, .judul-product',
                scale : 1.1,
                opacity : 1,
                duration : 2000,
                delay : 2500
            })
            anime({
                targets : '.keterangan-product',
                top : '47%',
                opacity : 1,
                duration : 2000,
                delay : 3000
            })
            anime({
                targets : '.model-kedua',
                height : '40vh',
                duration : 1000,
                delay : 3400,
            })
            anime({
                targets : '.model-utama',
                height : '50vh',
                duration : 1000,
                delay : 3400,
            })
            var selesai = anime({
                targets : '.model-utama img',
                width : '50%',
                duration : 100,
                delay : 4000,
            })
    });
});

home.addEventListener('click', function(){
                   
    anime({
        targets : '.model , .h2, .judul-product',
        scale : 1.1,
        opacity : 0,
        duration : 2000,
        delay : 1200
    })
    anime({
        targets : '.keterangan-product',
        top : '0%',
        opacity : 0,
        duration : 2000,
        delay : 1500
    })
    anime({
        targets : '.model-kedua',
        height : '0vh',
        duration : 1000,
        delay : 1800,
    })
    anime({
        targets : '.model-utama',
        height : '0vh',
        duration : 1000,
        delay : 2000,
    })
    anime({
        targets : '.model-utama img',
        width : '0%',
        duration : 100,
        delay : 2200,
    })
    anime({
        targets : '.kotak',
        keyframes: [
            {height: '90vh', top : '5%'},
            {height: '0vh', top: '90%'}
        ],
        easing : 'linear',
        duration : 800,
        delay : 1000,
        direction : 'reverse'
    })
    anime({
        targets : '.swiper-slide',
        translateY : 0,
        opacity : 1,
        duration : 500,
        delay: 2500,
        easing : 'linear'
    })
    anime({
        targets : '.logo, .icon',
        top : '3%',
        opacity : 1,
        duration : 500,
        delay : 2700,
        easing : 'linear'
    })
    anime({
        targets : ' .keterangan',
        keyframes : [
            { left : '4%'},
            {left : '4%', opacity: 1, easing: 'linear'}
        ],
        duration : 2900,
        delay : 700,
    })
    anime({
        targets : ' .social-icon',
        keyframes : [
            { right : '5%'},
            {right : '5%', opacity: 1, easing: 'linear'}
        ],
        duration : 2900,
        delay : 700,
    })
});