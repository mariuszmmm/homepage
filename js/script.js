{
    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        const langPl = document.querySelector(".js-langPl")
        const langEng = document.querySelector(".js-langEng")
        const colorButtonTextEng = document.querySelector(".js-buttonTextEng");
        const colorButtonTextPl = document.querySelector(".js-buttonTextPl");
        buttonElement.addEventListener("click", () => {
            langPl.classList.toggle("section__hidden");
            langEng.classList.toggle("section__hidden")
            colorButtonTextEng.classList.toggle("section__colorActivLang")
            colorButtonTextPl.classList.toggle("section__colorActivLang")
        })
    }
    init();
}