const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');
const navLinks = document.querySelectorAll('.nav-menu a'); // メニュー内のリンク全部

menuToggle.addEventListener('click', () => {
    navMenu.classList.add('open');
    menuToggle.style.display = 'none';
    menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.style.display = 'block';
    menuClose.style.display = 'none';
});

// 追加：リンクをクリックしたらメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.style.display = 'block';
        menuClose.style.display = 'none';
    });
});