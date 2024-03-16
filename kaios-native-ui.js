let classesWithColoredParents =
    /checkbox-container__input|radio-container__input|input-container__input|textarea-container__textarea|slider-container__slider/g;

const callFunction = (callback, e) => {
    let element = e.target;
    if (element.className && element.className.match(classesWithColoredParents))
        callback(element.parentElement);
};

const blur = (element) => element.classList.remove("selected");

const focus = (element) => element.classList.add("selected");

window.addEventListener("focus", (e) => callFunction(focus, e), true);
window.addEventListener("blur", (e) => callFunction(blur, e), true);
window.addEventListener('keydown', e => {
    if(e.key == "Enter") {
        let a = document.activeElement
        if(a.classList.contains('radio-container__input')) console.log('ehcke'), a.checked = true
    }
})

function showToast(text, time, color) {
    const toast = document.querySelector(".kui-toast")
    toast.style.background = "#" + color
    document.querySelector("meta[name=theme-color]").setAttribute("content", '#' + color);
    toast.style.display = "block";
    document.querySelector(".kui-pri").innerHTML = text;
    setTimeout(function () {
        toast.classList.add("byetoast")
        setTimeout(function () {
            toast.style.display = "none";
            toast.classList.remove("byetoast");
        }, 500);
        document.querySelector("meta[name=theme-color]").setAttribute("content", '#1f3374');

    }, time);
}

function nav(move) {
    const currentIndex = document.activeElement;
    const items = document.querySelectorAll('.focusable');
    let currentElemIdx = [...items].indexOf(currentIndex);
    if(move == -1 && currentElemIdx == -1) currentElemIdx = items.length
    const next = currentElemIdx + move;
    const targetElement = items[next];
    if (targetElement) targetElement.focus();
    else document.body.focus();
}