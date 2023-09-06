export function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        var elementInvisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        if (elementTop > windowHeight - elementInvisible) {
            reveals[i].classList.remove("active");
        }
    }
}