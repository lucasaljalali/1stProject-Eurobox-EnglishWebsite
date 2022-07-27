function changeClass() {
        const navUl = document.getElementById("hiddenList");
        (navUl.className == "navHidden") ? navUl.className = "navList" : navUl.className = "navHidden";
}