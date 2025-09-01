let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

let homeScore = 0
let guestScore = 0
homeEl.textContent = homeScore
guestEl.textContent = guestScore

function add1Home() {
    homeScore += 1
    homeEl.textContent = homeScore
}

window.add1Home = add1Home

function add2Home() {
    homeScore += 2
    homeEl.textContent = homeScore
}
window.add2Home = add2Home

function add3Home() {
    homeScore += 3
    homeEl.textContent = homeScore
}
window.add3Home = add3Home

function add1Guest() {
    guestScore += 1
    guestEl.textContent = guestScore
}
window.add1Guest = add1Guest

function add2Guest() {
    guestScore += 2
    guestEl.textContent = guestScore
}
window.add2Guest = add2Guest

function add3Guest() {
    guestScore += 3
    guestEl.textContent = guestScore
}
window.add3Guest = add3Guest

function newGame() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}
window.newGame = newGame