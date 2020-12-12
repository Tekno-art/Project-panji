

// this for selecting element DOM
const nasgorText = document.getElementById('nasgor');
const esBuahText = document.querySelector('.es');
// this for animation
const nasgorHuruf = [...nasgorText.textContent].map(function(n){
    return `<span>${n}</span>`;
}).join('');
nasgorText.innerHTML = nasgorHuruf;

const esBuahHuruf = [...esBuahText.textContent].map(function(s){
    return `<span>${s}</span>`;
}).join('');
esBuahText.innerHTML = esBuahHuruf;

// this for parallax effect
const descMakanan = document.querySelector('.desc-makanan');
const bgEsBuah = document.querySelector('.bg-esbuah');
const ketNasgor = document.querySelector('.ket-nasgor');
const gmbNasgor = document.querySelector('.image-nasgor img');
window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bgEsBuah.style.left = value* 0.46 + 'px';
    esBuahText.style.right = value* 0.1 + 'px';
    descMakanan.style.right = value* 0.37 + 'px'; 
    ketNasgor.style.left = value* 0.35 + 'px';
    gmbNasgor.style.right = value* 1.1 + 'px';
});


