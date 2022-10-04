$(document).ready( function (){

    const body = document.querySelector(`.body`);
    let darkMode = false;

    $(`.fa-moon`).click(function () {

        if (darkMode === false) {
            body.classList.add(`darkMode-activate`);
            darkMode = true;
        } else if (darkMode === true) {
            body.classList.remove(`darkMode-activate`);
            darkMode = false;
        }

    })
})