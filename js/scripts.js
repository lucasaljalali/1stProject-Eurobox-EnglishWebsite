
var prevScrollpos = window.pageYOffset;
const header = document.querySelector('header');
const headerStyles = window.getComputedStyle(header);
var headerHeight = headerStyles.getPropertyValue('height');
var headerHeightText = headerHeight + '';
var headerHeightNumber = parseFloat(headerHeight);

const banner1 = document.querySelector('img#banner1-image');
const banner2 = document.querySelector('.banner2');
const banner3 = document.querySelector('img#banner3-image');
const banner4 = document.querySelector('img#banner4-image');
const banner5 = document.querySelector('img#banner5-image');

const title1 = document.querySelector('.banner1 span');
const title2 = document.querySelector('.banner2 h1');
const subtitle2 = document.querySelector('.banner2 p');
const title3 = document.querySelector('.banner3 span');
const title4 = document.querySelector('.banner4 span');
const title5 = document.querySelector('.banner5 span');



//changes social bar list
function changeSocialListClass() {
        const socialList = document.getElementById("socialList");
        (socialList.className == "social-list-active") ? socialList.className = "social-list" : socialList.className = "social-list-active";
}

//changes social bar container
function changeSocialContainerClass() {
        const socialContainer = document.getElementById("socialContainer");
        (socialContainer.className == "social-container-active") ? socialContainer.className = "social-container" : socialContainer.className = "social-container-active";
}

//social bar "go inside" of navbar
var x = window.matchMedia("(max-width: 768px)");

function myFunction(x) {
        if (x.matches) { // If media query matches
        changeSocialContainerClass() 
        changeSocialListClass()
}
}


//navbar shows up and hide on hamburguer icon click
function changeClass() {
        const navUl = document.getElementById("hiddenList");
        (navUl.className == "navHidden") ? navUl.className = "navList" : navUl.className = "navHidden";
        myFunction(x);
}

//everything on scroll
window.addEventListener("scroll", () => {
        var currentScrollPos = window.pageYOffset;
        const clientHeight = document.documentElement.clientHeight;
        const banner1Top = banner1.getBoundingClientRect().top;
        const banner1Bottom = banner1.getBoundingClientRect().bottom;
        const banner2Bottom = banner2.getBoundingClientRect().bottom;
        const banner3Bottom = banner3.getBoundingClientRect().bottom;
        const banner4Bottom = banner4.getBoundingClientRect().bottom;
        const banner5Bottom = banner5.getBoundingClientRect().bottom;
        
//navbar hide on scroll down and show up again on scroll up
        (prevScrollpos > currentScrollPos) ? header.style.top = '0'
        : (banner1Top > (headerHeightNumber * 1.2)) ? header.style.top = '0'
        : header.style.top = '-' + headerHeightText;
        
//banner images gets 10% opacity on certain point of screen
        //banner1
        (banner1Top > (headerHeightNumber * 1.2)) ? banner1.style.opacity = '1'
        : (banner1Bottom < (clientHeight * 0.35)) ? banner1.style.opacity = '1'
        : banner1.style.opacity = '0.1';
        
        //banner2
        (banner2Bottom > (clientHeight * 0.7)) ? title2.style.opacity = '1'
        : (banner2Bottom < (clientHeight * 0.45)) ? title2.style.opacity = '1'
        : title2.style.opacity = '0'; 

        (banner2Bottom > (clientHeight * 0.7)) ? subtitle2.style.opacity = '0'
        : (banner2Bottom < (clientHeight * 0.45)) ? subtitle2.style.opacity = '0'
        : subtitle2.style.opacity = '1'; 
        
        //banner3
        (banner3Bottom > clientHeight) ? banner3.style.opacity = '1'
        : (banner3Bottom < (clientHeight * 0.5)) ? banner3.style.opacity = '1'
        : banner3.style.opacity = '0.1';

        //banner4
        (banner4Bottom > clientHeight) ? banner4.style.opacity = '1'
        : (banner4Bottom < (clientHeight * 0.5)) ? banner4.style.opacity = '1'
        : banner4.style.opacity = '0.1';

        //banner5
        (banner5Bottom > clientHeight) ? banner5.style.opacity = '1'
        : (banner5Bottom < (clientHeight * 0.6)) ? banner5.style.opacity = '1'
        : banner5.style.opacity = '0.1';

//banner texts shows up on certain point of screen
        //banner1
        (banner1Top > (headerHeightNumber * 1.2)) ? title1.style.display = 'none'
        : (banner1Bottom < (clientHeight * 0.35)) ? title1.style.display = 'none'
        : title1.style.display = 'block';

        (banner3Bottom > clientHeight) ? title3.style.display = 'none'
        : (banner3Bottom < (clientHeight * 0.5)) ? title3.style.display = 'none'
        : title3.style.display = 'block';

        (banner4Bottom > clientHeight) ? title4.style.display = 'none'
        : (banner4Bottom < (clientHeight * 0.5)) ? title4.style.display = 'none'
        : title4.style.display = 'block';

        (banner5Bottom > clientHeight) ? title5.style.display = 'none'
        : (banner5Bottom < (clientHeight * 0.6)) ? title5.style.display = 'none'
        : title5.style.display = 'block';

        prevScrollpos = currentScrollPos;

        console.log(banner5Bottom)
        console.log(clientHeight)
})