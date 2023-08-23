const butttonArray = document.querySelectorAll(".app__main-button");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");
const backspace = document.querySelector("#backspace");

function operateOnNumbers(valueString){
    return eval(valueString)
}

butttonArray.forEach((element) => {
    element.addEventListener("click", () => {
        display.innerHTML = display.innerHTML + element.innerHTML
    })
})

equal.addEventListener("click", () => {
    result = operateOnNumbers(display.innerHTML)
    display.innerHTML = result;
})

reset.addEventListener("click", () => {
    display.innerHTML = "";
})

backspace.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0, -1)
})