const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    const now = new Date()
    const today = now.getDate()
    let remainingDays = christmas - today
    countdownDisplay.innerHTML = remainingDays
}

renderCountdown()
