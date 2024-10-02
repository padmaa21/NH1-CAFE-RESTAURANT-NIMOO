setTimeout(() => {
    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
}, 3000);

setTimeout(() => {
    let late = document.querySelector('.late-load');
    late.style.display = 'block';
}, 3000);

let str = "NH1 CAFE & RESTAURANT NIMOO";
let i = 0;

function typeWriter() {
    if (i < str.length) {
        document.querySelector('.head').innerText += str[i++];
        setTimeout(typeWriter, 100);
    }
}

typeWriter();


window.addEventListener('scroll', function() {
    const upper = document.querySelector('.upper');
    const links = document.querySelectorAll('.color-change');
    if (window.scrollY > 0) {
        upper.classList.add('scrolled');
        for (let link of links) link.classList.add('black');
    } else {
        upper.classList.remove('scrolled');
        for (let link of links) link.classList.remove('black');
    }
});