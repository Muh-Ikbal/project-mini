let player = 0;
let name_player = ["X", "O"];
let boxes = ["", "", "", "", "", "", "", "", ""];
let draw = 0;
let gameEnd = false;
let xwins = 0;
let owins = 0;

function choose(box) {
    if (gameEnd) {
        return;
    }

    let element = document.getElementById("k" + box);
    if (element.innerHTML !== "") {
        return;
    }
    // write elements in html
    element.innerHTML = name_player[player];

    const curr_player = document.querySelector(".current-player");
    if (player == 0) {
        curr_player.src = "assets/img/char2-icon.png";
    } else {
        curr_player.src = "assets/img/char1-icon.png";
    }

    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    boxes[box] = name_player[player];
    draw += 1;
    const winner = document.querySelector("#wins");
    for (let i of winCondition) {
        if (
            boxes[i[0]] === name_player[player] &&
            boxes[i[1]] === name_player[player] &&
            boxes[i[2]] === name_player[player]
        ) {
            if (name_player[player] == "X") {
                winner.innerHTML = "X winner";
                xwins++;
                document.getElementById("xWins").innerHTML = xwins;
            } else {
                winner.innerHTML = "O winner";
                owins++;
                document.getElementById("oWins").innerHTML = owins;
            }
            gameEnd = true;
            return;
        }
    }
    if (boxes.length == draw) {
        winner.innerHTML = "draw";
        gameEnd = true;
        return;
    }
    player = 1 - player;
}

function playAgain() {
    const column = document.getElementsByClassName("box");
    console.log(column);
    for (let i of column) {
        i.innerHTML = "";
    }
    gameEnd = false;
    draw = 0;
    player = 0;
    boxes = ["", "", "", "", "", "", "", "", ""];
}
