/* Languages*/
function makePercentageVisible(){
    const text = document.getElementsByClassName("percentage")[0];
    text.style.opacity = "1";
}
function makePercentageVisible1(){
    const text = document.getElementsByClassName("percentage")[1];
    text.style.opacity = "1";
}
function makePercentageVisible2(){
    const text = document.getElementsByClassName("percentage")[2];
    text.style.opacity = "1";
}
function makePercentageVisible3(){
    const text = document.getElementsByClassName("percentage")[3];
    text.style.opacity = "1";
}
function makePercentagesVisible(){
    makePercentageVisible()
    makePercentageVisible1()
    makePercentageVisible2()
    makePercentageVisible3()
}

function makePercentageInvisible(){
    const text = document.getElementsByClassName("percentage")[0];
    text.style.opacity = "0";
}
function makePercentageInvisible1(){
    const text = document.getElementsByClassName("percentage")[1];
    text.style.opacity = "0";
}
function makePercentageInvisible2(){
    const text = document.getElementsByClassName("percentage")[2];
    text.style.opacity = "0";
}
function makePercentageInvisible3(){
    const text = document.getElementsByClassName("percentage")[3];
    text.style.opacity = "0";
}
function makePercentagesInvisible(){
    makePercentageInvisible()
    makePercentageInvisible1()
    makePercentageInvisible2()
    makePercentageInvisible3()
}

function barMovement(){
    const progressBar = document.getElementsByClassName
    ("progressBar1")[0]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", width + .1)
    }, 4)
}
function barMovement1(){
    const progressBar = document.getElementsByClassName
    ("progressBar1")[1]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", width + .1)
    }, 4)
}
function barMovement2(){
    const progressBar = document.getElementsByClassName
    ("progressBar2")[0]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", width + .1)
    }, 4)
}
function barMovement3(){
    const progressBar = document.getElementsByClassName
    ("progressBar3")[0]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", width + .1)
    }, 7)
}
function barMovements(){
    barMovement()
    barMovement1()
    barMovement2()
    barMovement3()
    setInterval(() => makePercentagesVisible(),3900)
}


function resetBar(){ /*fix this somehow */ /* THIS WORKS */
// Get a reference to the last interval + 1
const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

// Clear any timeout/interval up to that id
for (let i = 1; i < interval_id; i++) {
  window.clearInterval(i);
}
    const progressBar = document.getElementsByClassName
    ("progressBar1")[0]

        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", computedStyle)

}
function resetBar1(){ /*fix this somehow */
    const progressBar = document.getElementsByClassName
    ("progressBar1")[1]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", computedStyle)
    })
}
function resetBar2(){ /*fix this somehow */
    const progressBar = document.getElementsByClassName
    ("progressBar2")[0]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", computedStyle)
    })
}
function resetBar3(){ /*fix this somehow */
    const progressBar = document.getElementsByClassName
    ("progressBar3")[0]
    setInterval(() => {
        const computedStyle = getComputedStyle(progressBar)
        const width = parseFloat(computedStyle.getPropertyValue
            ("--width")) || 0
            progressBar.style.setProperty("--width", computedStyle)
    })
}
function resetBars(){
    resetBar()
    resetBar1()
    resetBar2()
    resetBar3()
}

function darkLightMode(){
    
}