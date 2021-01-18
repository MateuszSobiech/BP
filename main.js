const activeMenu = document.querySelector('.active-menu')

activeMenu.addEventListener('click', () =>{
    const mobileMenu = document.querySelector('.mobile-menu')

    mobileMenu.classList.toggle('dis');
})