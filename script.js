function generate() {
    var randomNumber = Math.floor(Math.random() * 10000) + 1;

    document.getElementById("result").innerText = "Random Number : " + randomNumber;
}
