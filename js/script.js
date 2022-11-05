{
    const langPl = document.querySelector(".section__langPl")
    const langEng = document.querySelector(".section__langEng")
    const colorButtonTextEng = document.querySelector(".section__buttonTextEng");
    const colorButtonTextPl = document.querySelector(".section__buttonTextPl");

    const defaultSettings = () => {
        langPl.classList.add("section__langPl");
        langEng.classList.remove("section__langEng");
        colorButtonTextEng.classList.add("section__buttonTextEng")
        colorButtonTextPl.classList.remove("section__buttonTextPl")
    }

    const clickChangeLanguage = () => {
        langPl.classList.toggle("section__langPl");
        langEng.classList.toggle("section__langEng");
        colorButtonTextEng.classList.toggle("section__buttonTextEng")
        colorButtonTextPl.classList.toggle("section__buttonTextPl")
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        defaultSettings();
        buttonElement.addEventListener("click", clickChangeLanguage)
    }
    init();
}