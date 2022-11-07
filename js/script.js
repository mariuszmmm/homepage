{
    const defaultSettings = (langPl, langEng, colorButtonTextPl, colorButtonTextEng) => {
        langPl.classList.add("js-langPl");
        langEng.classList.remove("section__langEng");
        colorButtonTextPl.classList.remove("section__buttonTextPl")
        colorButtonTextEng.classList.add("section__buttonTextEng")
    }
    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        const langPl = document.querySelector(".js-langPl")
        const langEng = document.querySelector(".js-langEng")
        const colorButtonTextEng = document.querySelector(".js-buttonTextEng");
        const colorButtonTextPl = document.querySelector(".js-buttonTextPl");
        defaultSettings(langPl, langEng, colorButtonTextPl, colorButtonTextEng);
        buttonElement.addEventListener("click", () => {
            langPl.classList.toggle("section__langPl");
            langEng.classList.toggle("section__langEng")
            colorButtonTextEng.classList.toggle("section__buttonTextEng")
            colorButtonTextPl.classList.toggle("section__buttonTextPl")
        })
    }
    init();
}