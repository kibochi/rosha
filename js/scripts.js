const preloader = document.querySelector('.preloader')

const form = document.querySelector("#form");

const dob = document.getElementById("dob");




// $('#dob').dateDropper({
//     lock:false,
//     init_animation:"fadein",
//     animate:true,
//     dropBackgroundColor:"#800080",
//     dropPrimaryColor:"#800080",
//     dropWidth: 124,


// }); 

try {
    dob.addEventListener("change", () => {
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(dob.value);
        if(birthYear.valueOf()){
            let years = birthYear.getFullYear();
            console.log(currentYear - years);
            
        }
    })
    
} catch (error) {
    
}


// form.addEventListener("submit", (event) =>{


//     //validate dob to be above 21

//     event.preventDefault();

// });




window.addEventListener('load', () => {
    preloader.classList.add('loaded')

});

window.addEventListener('DOMContentLoaded', event => {


   
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }



    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
