bar = document.getElementById('nav');

function navMenu() {
    bar.classList.remove("translate-x-full");
    bar.classList.add("translate-x-0");
}

function cutMenu() {
    bar.classList.remove("translate-x-0");
    bar.classList.add("translate-x-full");
}