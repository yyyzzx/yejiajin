let allBtn = document.getElementById("all");
let graphicsBtn = document.getElementById("graphic");
let printmakingBtn = document.getElementById("print");
let webBtn = document.getElementById("web");

let w1 = document.getElementById("web-1");
let w2 = document.getElementById("web-2");
let g1 = document.getElementById("gra-1");
let g2 = document.getElementById("gra-2");
let g3 = document.getElementById("gra-3");
let g4 = document.getElementById("gra-4");
let g5 = document.getElementById("gra-5");
let g6 = document.getElementById("gra-6");
let p1 = document.getElementById("pmk-1");
let p2 = document.getElementById("pmk-2");
let p3 = document.getElementById("pmk-3");
let p4 = document.getElementById("pmk-4");
// let p3 = document.getElementById("project-3");


function showAll() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    graphicsBtn.style.backgroundColor = "white"
    graphicsBtn.style.color = "black";
    printmakingBtn.style.backgroundColor = "white"
    printmakingBtn.style.color = "black";
    allBtn.style.backgroundColor = "black";
    allBtn.style.color = "white"
    webBtn.style.backgroundColor = "white"
    webBtn.style.color = "black";
}

function showGraphics() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    w1.style.display = "none";
    w2.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    allBtn.style.backgroundColor = "white"
    allBtn.style.color = "black";
    // allBtn.onmouseover.style.backgroundColor = "black";
    printmakingBtn.style.backgroundColor = "white"
    printmakingBtn.style.color = "black";
    webBtn.style.backgroundColor = "white"
    webBtn.style.color = "black";
    graphicsBtn.style.backgroundColor = "black";
    graphicsBtn.style.color = "white"
    graphicsBtn.style.transition = "0.8s";
}

function showPrintmaking() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    w1.style.display = "none";
    w2.style.display = "none";
    g1.style.display = "none";
    g2.style.display = "none";
    g3.style.display = "none";
    g4.style.display = "none";
    g5.style.display = "none";
    g6.style.display = "none";
    allBtn.style.backgroundColor = "white"
    allBtn.style.color = "black";
    graphicsBtn.style.backgroundColor = "white"
    graphicsBtn.style.color = "black";
    webBtn.style.backgroundColor = "white"
    webBtn.style.color = "black";
    printmakingBtn.style.backgroundColor = "black";
    printmakingBtn.style.color = "white"
    printmakingBtn.style.transition = "0.8s";
}

function showWeb() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.display = "block";
    }
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    g1.style.display = "none";
    g2.style.display = "none";
    g3.style.display = "none";
    g4.style.display = "none";
    g5.style.display = "none";
    g6.style.display = "none";
    allBtn.style.backgroundColor = "white"
    allBtn.style.color = "black";
    graphicsBtn.style.backgroundColor = "white"
    graphicsBtn.style.color = "black";
    printmakingBtn.style.backgroundColor = "white"
    printmakingBtn.style.color = "black";
    webBtn.style.backgroundColor = "black";
    webBtn.style.color = "white"
    webBtn.style.transition = "0.8s";
}

// function showExercises() {
//     let cards = document.querySelectorAll(".card");
//     for (let card of cards) {
//         card.style.display = "block";
//     }
//     p1.style.display = "none";
//     p2.style.display = "none";
//     p3.style.display = "none";

//     allBtn.style.backgroundColor = "white"
//     allBtn.style.color = "black";
//     projectsBtn.style.backgroundColor = "white"
//     projectsBtn.style.color = "black";
//     exercisesBtn.style.backgroundColor = "black";
//     exercisesBtn.style.color = "white"
// }


