// === navbar ===
// điều hướng page

{
    const navBarLinks = document.querySelectorAll('.navbar__link');
    const conTents = document.querySelectorAll('.content');

    navBarLinks.forEach((navBarLink, index) => {
        const conTent = conTents[index]

        navBarLink.onclick = function () {
            document.querySelector('.navbar__link.link--active').classList.remove('link--active')
            document.querySelector('.content.content--active').classList.remove('content--active')

            this.classList.add('link--active')
            conTent.classList.add('content--active')
        }
    })
}

// === slider ===
// slider cuối page 1

{
    const dots = document.querySelectorAll('.dot') 
    const sloganContents = document.querySelectorAll('.slogan__content');


    dots.forEach((dot, index) => {
        const sloganContent = sloganContents[index]

        dot.onclick = function() {
            document.querySelector('.dot.dot--active').classList.remove('dot--active')
            document.querySelector('.slogan__content.slogan--active.fade').classList.remove('slogan--active')
    
            this.classList.add('dot--active')
            sloganContent.classList.add('slogan--active')
        }

    })
}

