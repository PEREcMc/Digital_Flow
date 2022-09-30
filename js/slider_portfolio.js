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
                portfolioButton.href = './page_error.html';
                break;
            default:
                break;
        }
    })
})
