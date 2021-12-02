const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

christmasBtn.addEventListener("click", function() {
    body.classList.remove("snow")
    body.classList.add("christmas")
})

snowBtn.addEventListener("click", function() {
    body.classList.remove("christmas")
    body.classList.add("snow")
})
