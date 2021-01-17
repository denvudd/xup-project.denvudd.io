/* scroll event */

let target = document.querySelector('#intro__inner');
// top offset to element
let targetPos = target.getBoundingClientRect().top;
// window height
let winHeight = window.innerHeight;
// Really top offset to element
let scrollToElem = targetPos - winHeight;
// flag to check re-scroll
let flag = true;

document.addEventListener('scroll', () => {
    // if we scroll to element
    if (window.scrollY > scrollToElem && flag) {
        count(); flag = false;
    }
    // if we scroll to the element again, then everything will work again
    else if(window.scrollY < scrollToElem && !flag) { flag = true; }
});

/* count up function */

document.addEventListener('load', count())

function count() {
    document.querySelectorAll('.data-number').forEach((e) => {
        var currentNumber = 0
        var finalNumber = e.getAttribute('data-number')
        finalNumber = parseInt(finalNumber)
        var delay

        switch (true) {
            case (finalNumber < 10):
                delay = 200
                break
            case (finalNumber < 50):
                delay = 90
                break
            case (finalNumber < 100):
                  delay = 100
                  break
            case (finalNumber < 500):
                delay = 10
                break
            default:
                delay = 50
                break
        }

        var increment = setInterval(() => {
            e.innerHTML = currentNumber
            if (currentNumber < finalNumber) {
                if (finalNumber > 1000) {
                    currentNumber += 100
                } else {
                    currentNumber++
                }
            } else {
                clearInterval(increment)
            }
        }, delay)
        increment
    })
}