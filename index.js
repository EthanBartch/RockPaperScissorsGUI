

let counter = 1
let answer;

const buttons = document.querySelectorAll('.buttons')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const reset = document.querySelector('#reset')
const playerScore = document.querySelector('#playerscore')
const computer = document.querySelector('#computerscore')
const roundnum = document.querySelector('#roundnumber')
const playerChoice = document.querySelector('#plrChoice')
const computerChoice= document.querySelector('#compchoice')

reset.addEventListener('click', function(){location.reload()});
reset.addEventListener('click', location.reload.bind(location));

button1.addEventListener('click', function logAnswer(){
    answer = 1

    roundnum.textContent=counter 
   

    RPS()
    counter++

    checkCounter()
}); 

button2.addEventListener('click', function logAnswer(){
  answer = 2

  roundnum.textContent=counter

  RPS()
  counter++

  checkCounter()

}); 

button3.addEventListener('click', function logAnswer(){
  answer = 3

  roundnum.textContent=counter 

  RPS()
  counter++

  checkCounter()
}); 

//___________________________

let hcounter=0
let ccounter=0







function checkCounter(){

if (counter == 6){

  console.log("results")

  console.log("Final Human Score: "+hcounter)
  console.log("Final Computer Score: "+ccounter)
  final()
}}









function RPS(){




let ran =Math.floor(Math.random()*3)+1;

function Val(){
     
    if (answer==ran){
         console.log("Its a Tie")
    }else if (answer==1 && ran==3){
        hcounter++
       console.log("You Win!! :)")
    }else if (ran==1 && answer==3){
        ccounter++
    console.log("You Lose D:")
    }else if (answer==2 && ran==1){
        hcounter++
        console.log("You Win!! :)")
    }else if (ran==2 && answer==1){
        ccounter++
        console.log("You Lose D:")
    }else if(answer==3 && ran==2){
        hcounter++
        console.log("You Win!! :)")
    }else if(ran==3 && answe==2){
        ccounter++
        console.log("You Lose D:")
    }
}



     







function hconverter(){




if (answer>3 || answer<=0){
  
    answer="Error"


}else{
    
    

}


if (answer==1){
    console.log("You Picked Rock")
    playerChoice.textContent="Rock"
}   
else if(answer==2){
    console.log("You Picked Paper")
    playerChoice.textContent="Paper"
}   
else if(answer==3){
    console.log("You Picked Scissors")
    playerChoice.textContent="Scissors"
}

  return answer
 
}








function cconverter(){

   

    if (ran==1){
        console.log("The Computer Picked Rock")
        computerChoice.textContent="Rock"
    }
    else if(ran==2){
        console.log("The Computer Picked Paper")
        computerChoice.textContent="Paper"
    }
    else if(ran==3){
        console.log("The Computer Picked Scissors")
        computerChoice.textContent="Scissors"
    }   
       return ran
    }
    
 





   function Val(){
     
    if (answer==ran){
         console.log("Its a Tie")
    }else if (answer==1 && ran==3){
        hcounter++
       console.log("You Win!! :) Rock Beats Scissors")
    }else if (ran==1 && answer==3){
        ccounter++
    console.log("You Lose D: Rock Beats Scissors")
    }else if (answer==2 && ran==1){
        hcounter++
        console.log("You Win!! :) Paper Beats Rock")
    }else if (ran==2 && answer==1){
        ccounter++
        console.log("You Lose D: Paper Beats Rock")
    }else if(answer==3 && ran==2){
        hcounter++
        console.log("You Win!! :) Scissors Beats Paper")
    }else if(ran==3 && answer==2){
        ccounter++
        console.log("You Lose D: Scissors Beats Paper")
    }
}
  
  Val()
  console.log("This is human score: "+hcounter)
  playerScore.textContent=hcounter
  
  console.log("this is computer score: "+ccounter)
  computer.textContent=ccounter
  hconverter()
  cconverter()





}




function final(){
if (hcounter>ccounter){
    console.log("You Won The Game :DDDDDD")
 } else if(ccounter>hcounter){
   console.log("You Lose Try Again !!!")
 }else if(hcounter == ccounter){

   console.log("Wow No way Its an actually a Tie")
 }
}