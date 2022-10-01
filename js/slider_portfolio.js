const portfolioDots = document.querySelector('.portfolio-dots__wrapper');
const dots = portfolioDots.querySelectorAll('.slider-dot');

const portfolio = document.querySelector('.portfolio');
const titlePortfolio = document.querySelector('.title__portfolio');
const portfolioBg = document.querySelector('.portfolio__bg');
const portfolioButton = document.querySelector('.portfolio__button');

function changeDot(n) {
    for (dot of dots) {
        dot.classList.remove('active-dot');
    }
    dots[n].classList.add('active-dot');
} 

dots.forEach( (item, index) => {
    item.addEventListener('click', function() {
        changeDot(index);
        switch (index) {
            case 0:
                
                break;
            case 1:
                portfolio.classList.add('work1');
                portfolioBg.src = './img/portfolio/work1/work1.png';
                portfolioButton.style.bottom = 'calc(100%/2)'; 
                portfolioButton.style.right = 'calc(100%/2 - 500px)';
                if (window.matchMedia('(max-width: 1200px)').matches) {
                    portfolioButton.style.right = 'calc(100%/2 - 350px)';
                }
                if (window.matchMedia('(max-width: 500px)').matches) {
                    portfolioButton.style.bottom = 'calc(62%)'; 
                    portfolioButton.style.right = 'calc(100%/2 - 110px)';
                }
                portfolioButton.href = './page_error.html';
                break;
            default:
                break;
        }
    })
})


function sliderDefault() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
        portfolioButton.style.right = 'calc(100%/2 - 350px)';
    }
    if (window.matchMedia('(max-width: 500px)').matches) {
        portfolioButton.style.bottom = 'calc(62%)'; 
        portfolioButton.style.right = 'calc(100%/2 - 110px)';
    }
}

setInterval( sliderDefault, 100);
