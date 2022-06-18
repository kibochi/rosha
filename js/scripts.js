const preloader = document.querySelector('.preloader')

const form = document.querySelector("#form");

const dob = document.getElementById("dob");
const tops = document.querySelector('.top');

const toggler = document.querySelector(".navbar-toggler");

const collapse = document.querySelector(".navbar-nav");

toggler.addEventListener("click", (e)=>{

collapse.classList.toggle("navbar-collapse");
})

window.onscroll = function() {
    let top = window.scrollY



    if (top >= 100) {
        tops.style = 'Display:block'
    } else {
        tops.style = 'Display:none'
    }
}


$('#dob').dateDropper({
    lock:false,
    init_animation:"fadein",
    animate:true,
    dropBackgroundColor:"#800080",
    dropPrimaryColor:"#800080",
    dropWidth: 124,


}); 
$('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
});

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




window.addEventListener('DOMContentLoaded', () => {
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


    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/61fc98d7b9e4e21181bd6433/1g5rno9t3';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
