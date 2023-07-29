
const user = document.getElementById("user");
const opponent = document.getElementById("opponent");
const buttons= document.querySelectorAll(".button");
const body = document.querySelector("body");
const counter = document.querySelector("h1");
let num = 0;


let options = ["Rock", "Paper", "Scissor"];




buttons.forEach(button => {
button.addEventListener("click", function(){





    let random = Math.floor(Math.random() * options.length);

    randomOption = options[random];


    function changer(person, chosenOption)
    {
        

       
        switch (chosenOption){
            case "Rock":
                person.src = "rock.png";
                person.alt = "ROCK"
                break;
            case "Paper":
                person.src = "paper.png";
                person.alt = "PAPER"
                break;
            case "Scissor":
                person.src = "scissor.png";
                person.alt = "SCISSORS"
                break;
            default:
                person.src = "error.png";
                person.alt = "ERROR"


        }

    }

    changer(user, button.innerText);
    changer(opponent, randomOption);


    if (button.innerText == randomOption) {
        body.style.backgroundColor = "#00cdf9";
        
    } else {
        if (button.innerText == "Paper" && randomOption == "Rock") {
            body.style.backgroundColor = "#99e65f";
            num++;
        
        } 

        if (button.innerText == "Rock" && randomOption == "Paper") {
            body.style.backgroundColor = "#f5555d"; 
            num = 0;
        } 

        if (button.innerText == "Scissor" && randomOption == "Paper") {
            body.style.backgroundColor = "#99e65f"; 
            num++;
        } 

        if (button.innerText == "Paper" && randomOption == "Scissor") {
            body.style.backgroundColor = "#f5555d"; 
            num = 0;

        }

        if (button.innerText == "Rock" && randomOption == "Scissor") {
            body.style.backgroundColor = "#99e65f";
            num++;
        }

        if (button.innerText == "Scissor" && randomOption == "Rock") {
            body.style.backgroundColor = "#f5555d";
            num = 0;
 
        } 
        
        
    }

    counter.innerText = num;




})

})