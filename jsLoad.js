function loadA() {
    var readIn = JSON.parse(dataA);
    document.getElementById("here").innerHTML = readIn[0].name + " has lost his password.<br>" +
        "Sending Created Question: " + readIn[0].Question + "<br>If the answer is: " + readIn[0].Answer +
        "<br>Send this password: " + readIn[0].password;
}

function loadB() {
    var readIn = JSON.parse(dataB);
    document.getElementById("here").innerHTML = readIn[0].name + " was given a " + readIn[0].assign + " assignment on " + readIn[0].date;
}

function loadC() {
    var readIn = JSON.parse(dataC);
    document.getElementById("here").innerHTML = readIn.cars;
}