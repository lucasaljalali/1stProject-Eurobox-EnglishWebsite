
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