let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const yourscore=document.querySelector("#userScore")
const computerscore=document.querySelector("#compScore")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIDx=Math.floor(Math.random()*3);
    return options[randIDx];
};

const drawGame=()=>{
    console.log("game draw");
    msg.innerText="GAME WAS DRW :/"
    msg.style.backgroundColor="lightblue";
    msg.style.borderRadius="50px";
}
const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        yourscore.innerText=userScore;
        console.log("you win");
        msg.innerText="YOU WON :)"
        msg.style.backgroundColor="green";
        msg.style.borderRadius="50px";
    }else{
        compScore++;
        computerscore.innerText=userScore;
        console.log("you lose");
            msg.innerText="YOU LOSE :("
            msg.style.backgroundColor="red";
            msg.style.borderRadius="50px";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice is", compChoice);
    if (userChoice===compChoice){
        drawGame();
        // DRAW
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissors"? false:true
        }else{
            userwin=compChoice==="rock"? false:true
        }
        showWinner(userwin);
    } 


};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});