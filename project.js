let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")//to store & get all div's 
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const happyimg=document.querySelector("#happy");
const sadimg=document.querySelector("#sad");
const drawimg=document.querySelector("#draw");
const getCompChoice=()=>{
    const options=["rock","paper","scissor"];//FROM string we cant select ,so we choose a array
    const randomIndx=Math.floor(Math.random()*3);
    return options[randomIndx];
}
const drawGame=()=>{
    console.log("game was draw.");
    happyimg.classList.add('hidden');
    sadimg.classList.add('hidden');
    drawimg.classList.remove('hidden');
    drawimg.classList.add('visible');
    msg.innerText="game was draw.play again";
    
   
}
const showWinner=(userWin,userChoice,CompChoice)=>{
    drawimg.classList.add('hidden');
    happyimg.classList.add('hidden');
    sadimg.classList.add('hidden');
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        happyimg.classList.remove('hidden');
        happyimg.classList.add('visible');
        console.log("you win!");
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        sadimg.classList.remove('hidden');
        sadimg.classList.add('visible');
        console.log("you lose");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
   console.log("userChoice=",userChoice);
   const CompChoice=getCompChoice();//COMPUTER FUNCTION CALL
    console.log("CompChoice=",CompChoice);
    if(userChoice===CompChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=CompChoice==="paper" ?false:true;
            
        }else if(userChoice==="paper"){
            userWin=CompChoice==="scissors"?false:true;
        }else{
            userChoice=CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{//TO OCCOUR EVENT
        const userChoice=choice.getAttribute("id");
    //  console.log("choice was clicked",userChoice);
     playGame(userChoice);//USER FUNTION CALL
    });
});