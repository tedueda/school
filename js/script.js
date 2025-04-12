document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // ヘッダーの高さを考慮
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('お問い合わせありがとうございます。メッセージが送信されました。');
        this.reset();
    });
}
