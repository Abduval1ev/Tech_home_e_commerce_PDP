document?.addEventListener("DOMContentLoaded", () => {
    const openNavMenu = document.getElementById("nav_menu");
    const closeNavMenu = document.getElementById("menu_bar_close");
    const menuBar = document.getElementById("menu_bar");
    console.log(openNavMenu);


    openNavMenu?.addEventListener("click", () => {
        menuBar.classList.add("active_menu");
    });
    closeNavMenu?.addEventListener("click", () => {
        menuBar.classList.remove("active_menu");
    });
});
