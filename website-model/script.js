const daftarProduct = document.querySelectorAll('.img');
let home = document.querySelector('.besar');
let kontainerModalUtama = document.querySelector('.model-utama img');
let judul = document.querySelector('.judul-product');
let text = document.querySelectorAll('.text');
const kontenKeterangan = document.querySelectorAll('.konten-keterangan');

// Data Baju

const dataBaju = [
    {
        "nama" : "Kemeja olivia hasler",
        "ukuran" : "LD :84 P :60",
        "harga" : "IDR : 40k"
    },
    {
        "nama" : "Blouse kotak",
        "ukuran" : "LD 94 P 72",
        "harga" : "IDR 35k"
    },
    {
        "nama" : "Kemeja Serut",
        "ukuran" : "LD 92 P 70",
        "harga" : "IDR 45k"
    },
    {
        "nama" : "Blouse kotak merah",
        "ukuran" : "LD 106 P 62",
        "harga" : "IDR 55k"
    },
    {
        "nama" : "Kemeja serut kool",
        "ukuran" : "LD 87 P 59",
        "harga" : "IDR 40k"
    },
    
]

daftarProduct.forEach((btn) =>{
    btn.addEventListener('click', function(e){
        if(e.target.className === 'img'){
            kontainerModalUtama.src = e.target.src;
        }
        let nama = this.getAttribute('color');
        let kontenKeterangann = document.querySelector(`.img[color="${nama}"]`);
        kontenKeterangan.forEach(k => k.classList.remove('show'));
        kontenKeterangann.classList.add('show');
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
// dataBaju.filter(function(data){
    // let kumpulanData = '';
    //         kumpulanData += `<div class="judul-product">
    //                             <h1>${data.nama}</h1>
    //                         </div>
    //                         <div class="keterangan-product">
    //                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt inventore architecto</p>
    //                             <p class="desc">${data.ukuran}</p>
    //                             <p>${data.harga}</p>
    //                         </div>`
    //         const kontenKeterangan = document.querySelector('.konten-keterangan');
// })