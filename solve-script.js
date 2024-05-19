const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
    autoScroll();
}

function clearDisplay() {
    display.value = '';
}

function calculate() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = display.value;;
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function autoScroll(){
    display.scrollLeft = display.scrollWidth;
}