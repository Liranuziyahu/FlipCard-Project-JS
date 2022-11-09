//******************************
//----scripts for the Timer-----
//******************************

// פונקציית טיימר

let secondsCounter = 0 ;
let minCounter = 0
let isTrue = false;
startTimer = () => {

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

secondInterval = setInterval(() => {
  
  secondsCounter++ ;
  if(secondsCounter<10)
  
  seconds.innerHTML = "0" + secondsCounter;
  else
  seconds.innerHTML = secondsCounter;

  if(secondsCounter == 60)
  {
      secondsCounter = 0;
      seconds.innerHTML = "0" + secondsCounter;
  }
},1000)
minInterval = setInterval(() => {
 
  minCounter++ 
  if(minCounter<10)
  
     minutes.innerHTML = "0" + minCounter;
     else
     minutes.innerHTML = minCounter;
  if(minCounter == 60)
  {
      minCounter = 0;
  }

  },60000)
};

// Change value of the button , and reagent functions.

timerSet = () => {
    if(isTrue){
        startTimer()
        isTrue = !isTrue
        document.getElementById('btn_stop_move').value = "stop";
        cards.forEach( card => card.addEventListener('click', flipTheCard));
    }
    else{
        stopTimer();
        isTrue = !isTrue
        document.getElementById('btn_stop_move').value = "Continue";
        cards.forEach( card => card.removeEventListener('click', flipTheCard));
    }
}
// Stop Button 
let tempclick = false;

stopTimer = () => {
    clearInterval(secondInterval)
    clearInterval(minInterval)
}
    
// Rest Button 

resetTimer = () => {
    secondsCounter = 0;                                                    //Function make rest to timmer and points.                                            
    minCounter = 0;                                                        //Change the cards to the back font of them(logo).
    seconds.innerHTML =  "0" + secondsCounter;                             //Stop the option to click on cards and flip them over 
    minutes.innerHTML =  "0" + minCounter;                                 //and change the button value to "stop"
    points= 0 ;
    pointTxt.innerHTML = "Your Score is: " + points;
    checkend = 0;
    restCard();
   if(btn_stop_move.value == "Continue")                                     
   {
    document.getElementById('btn_stop_move').value = "stop";               
    timerSet()
}
    cards.forEach( card => card.addEventListener('click', flipTheCard));
    
}

    //checker if there are cards that flip over to an animal card , and flip over them back to the logo card.
    function restCard(){
        for(let cardRest of cards)
            if(cardRest.classList.contains('flip'))
            {
                cardRest.classList.remove('flip');
                cards.forEach( card => card.addEventListener('click', flipTheCard));  
            }
    };


//******************************
//---script for the card game---
//******************************

const cards = document.querySelectorAll('.card');                             // taking card class and make it as a const in js 
let firstCardChosed;
let secondCardChosed;
let cardFlipped = false;
let showCards = document.getElementsByClassName('dCards');
let points = 0;                                                               // var for points
let pointTxt = document.getElementById('points');
pointTxt.innerHTML = "Your Score is: " + points;


function flipTheCard() {                                                      // function to add a class name for each card that is clicked
    this.classList.add('flip'); 

    if(cardFlipped==false)



}

