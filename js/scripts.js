
var prevScrollpos = window.pageYOffset;
const header = document.querySelector('header');
const headerStyles = window.getComputedStyle(header);
var headerHeight = headerStyles.getPropertyValue('height');
var headerHeightText = headerHeight + '';

const banner1 = document.querySelector('img#banner1-image');
const banner3 = document.querySelector('img#banner3-image');
const banner4 = document.querySelector('img#banner4-image');
const banner5 = document.querySelector('img#banner5-image');

const title1 = document.querySelector('.banner1 span');
const title3 = document.querySelector('.banner3 span');
const title4 = document.querySelector('.banner4 span');
const title5 = document.querySelector('.banner5 span');


function changeSocialListClass() {
        const socialList = document.getElementById("socialList");
        (socialList.className == "social-list-active") ? socialList.className = "social-list" : socialList.className = "social-list-active";
}

function changeSocialContainerClass() {
        const socialContainer = document.getElementById("socialContainer");
        (socialContainer.className == "social-container-active") ? socialContainer.className = "social-container" : socialContainer.className = "social-container-active";
}

var x = window.matchMedia("(max-width: 768px)");

function myFunction(x) {
        if (x.matches) { // If media query matches
        changeSocialContainerClass() 
        changeSocialListClass()
}
}

function changeClass() {
        const navUl = document.getElementById("hiddenList");
        (navUl.className == "navHidden") ? navUl.className = "navList" : navUl.className = "navHidden";
        myFunction(x);
}

window.addEventListener("scroll", () => {
        var currentScrollPos = window.pageYOffset;
        /*(prevScrollpos > currentScrollPos) ? header.style.top = '0' : header.style.top = '-' + headerHeightText;*/
        
        (prevScrollpos > currentScrollPos) ? banner1.style.opacity = '1' : banner1.style.opacity = '0.1';
        (prevScrollpos > currentScrollPos) ? banner3.style.opacity = '1' : banner3.style.opacity = '0.1';
        (prevScrollpos > currentScrollPos) ? banner4.style.opacity = '1' : banner4.style.opacity = '0.1';
        (prevScrollpos > currentScrollPos) ? banner5.style.opacity = '1' : banner5.style.opacity = '0.1';

        (prevScrollpos > currentScrollPos) ? title1.style.display = 'none' : title1.style.display = 'block';
        (prevScrollpos > currentScrollPos) ? title3.style.display = 'none' : title3.style.display = 'block';
        (prevScrollpos > currentScrollPos) ? title4.style.display = 'none' : title4.style.display = 'block';
        (prevScrollpos > currentScrollPos) ? title5.style.display = 'none' : title5.style.display = 'block';

        prevScrollpos = currentScrollPos;
})