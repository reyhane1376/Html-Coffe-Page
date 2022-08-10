let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");
icon.addEventListener("click", function() {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList = "fa fa-times menu-icon";
        $('body').append('<div class="background-container"></div>');
        $('.background-container').click(function() {
            menu.style.left = "-250px";
            icon.classList = "fa fa-bars menu-icon";
            $(this).remove();
        })
    } else {
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu-icon";
    }
});