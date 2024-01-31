
document.addEventListener('DOMContentLoaded', function () {
   
    const navLinks = document.querySelectorAll('.navbar ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
         
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
   
    const emailButton = document.getElementById('emailButton');

    emailButton.addEventListener('click', function () {
        
        const emailAddress = 'heebak45@email.com'; 
        const mailtoUrl = `mailto:${emailAddress}`;

        window.location.href = mailtoUrl;
    });
});