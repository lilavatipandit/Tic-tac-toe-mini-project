let boxes = document.querySelectorAll(".box");

let msg = document.querySelector("#msg");

let msgcontainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector(".reset-Btn");
let newGameBtn= document.querySelector( "#new-Btn");


let turnO = true // playerx player O
 
const winpatterns= [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
  const resetGame = () =>{
    turnO = true ;
    enableBoxes();
    msgcontainer.classList.add("hide");

  } ;

boxes.forEach((box) => {
box.addEventListener("click",() =>{
  console.log("box was clicked");
  if(turnO){
    box.innerText = " O";
    turnO = false ;  // player o
  } 
  else{
    box.innerText = "x";
    turnO = true ;  // player x
  }
   box.disabled =true ;
   checkwinner();
});
}); 


    const checkwin  = () => {
      msgcontainer.classList.remove("hide");
      enableBoxes();
    }
    
  const disableBoxes =() => {
    for(  let box of boxes){
      box.disabled = true ;
    }
  }
  const enableBoxes =() => {
    for(  let box of boxes){
      box.disabled = true ;
      box.innerText="";
    }
  }
  

     const showwinner = (winner) => {
      if (winner === null) {
          msg.innerText = "Match was draw";
      } else {
          msg.innerText = `Congratulation, the winner is ${winner}`;
      } 
    
    
    msgcontainer.classList.remove("hide");
    disableBoxes();
  };
 
   const showdraw=() => {
    msg.innerText = `match is draw ${winner ? draw: 'No one'}`;
  
  msgcontainer.classList.remove("hide");
  disableBoxes();
};   

const checdraw  = () => {
  msgcontainer.classList.remove("hide");
  enableBoxes();
}


 const checkwinner =() => {

  let winner= null ;
  let draw = true ;


  for( let pattern of winpatterns){
       let pos1val = boxes[pattern[0]].innerText ;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
       
        if(pos1val != "" && pos2val != "" && pos3val != ""){
           if( pos1val === pos2val && pos2val === pos3val){
              console.log("winner", pos1val);
              showwinner(pos1val);
              winnerFound = true;
              break;
             return ;
        
            }
          
        }
         
     }

 
     if (!winner) {
      let draw = true;
      for (let box of boxes) {
          if (!box.innerText) {
              draw = false;
              break;
          }
      }


if (winner) {
  showwinner(winner);
} else if (draw) {
  showwinner(null); // Display draw message on screen
}
}
     };

// click button reset game
 resetBtn.addEventListener("click", resetGame); 

 newGameBtn.addEventListener("click", resetGame);






