let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgcon=document.querySelector(".msgcon");
let msg=document.querySelector("#msg");
let turn0=true;
const winP=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [3,4,5],
     [6,7,8],
     [1,4,7],
     [2,5,8],
     [6,4,2],
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcon.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWin();
    });
});
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();


};
const checkWin=()=>{
    for(let pattern of winP){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
    if(pos1 !="" && pos2 !=""&& pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1)
            showWinner(pos1);
        
            
             }
        }
    }

};
newGame.addEventListener("click",resetGame);
resetb.addEventListener("click",resetGame);
resetGame();