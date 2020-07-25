let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const stone_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissor_div = document.getElementById("s");

function getcomputerchoice(){
    const choices = ['r' , 'p' , 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function win(userchoice , computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    result_div.innerHTML = userchoice + " beats " + computerchoice + " You Win ";
}

function loss(userchoice , computerchoice){
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    result_div.innerHTML = converttoword(computerchoice) + " beats " + convertoword(userchoice) + " You Loss";
}

function draw(userchoice , computerchoice){
    result_div.innerHTML = userchoice + " = " + computerchoice + " It's a Draw";
}

function game(userchoice){
    const computerchoice = getcomputerchoice();
    switch(userchoice + computerchoice){
        case "rs":
        case "sp":
        case "pr":
            win(userchoice , computerchoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            loss(userchoice , computerchoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userchoice , computerchoice);
            break;

    }
}


function main(){
    stone_div.addEventListener('click', function()
    {
        game("r");
    })

    paper_div.addEventListener('click', function()
    {
        game("p");
    })

    sissor_div.addEventListener('click', function()
    {
        game("s");
    })
}

main();