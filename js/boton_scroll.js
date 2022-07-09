export default function scrollUpButton(btn) {

    const $button = document.querySelector(btn);

    window.addEventListener("scroll", e => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        console.log(scrollTop);

        if (scrollTop > 600) {
            $button.classList.remove("hidden");
        } else {
            $button.classList.add("hidden");
        }
    });

    window.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    });

}