let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;


function addPoints(teamID, points) {
    if(teamID === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (teamID === 'guest') {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
}

function restart() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;

}