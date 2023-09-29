// Add custom JavaScript here
function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky')
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.add('navbar-sticky')
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);


// function colornow() {
//     const color = document.querySelector('.container');

//     window.addEventListener('colorY', () => {
//        if(window.scrollTo) {
//         navbar.classList.add('bg-dark');
//        }else{
//         navbar.classList.remove(bg-dark);
//        }
//     });
// }