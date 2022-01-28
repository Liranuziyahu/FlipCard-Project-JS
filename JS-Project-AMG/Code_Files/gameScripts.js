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


function flipTheCard() {  
    if(this.className!='flip')   
    {          
        console.log(this.className + "  not good");                                       // function to add a class name for each card that is clicked
        this.classList.add('flip');                                               // adding 'flip' class to the card that was clicked
        if (!cardFlipped) {                                                       // if cardFlipped = false it will do it
            cardFlipped = true;                                                   // cardFlipped changed to true
            firstCardChosed = this;                                                    // firstCardChosed get var of the clicked card        
            firstCardChosed.removeEventListener('click', flipTheCard);            // removing the option to click the card to make bugs not happen
            return;
        }
    // after clicking 1 card and go to the second card and click on it, this will happend
        secondCardChosed = this;                                                  // secondCardChosed get var of the clicked card
        cardFlipped = false;                                                      // cardFlipped turn into false again
        secondCardChosed.removeEventListener('click', flipTheCard);               // removing the option to click the card to make bugs not happen      
        match(); 
                                                                     }
   else     
   return;                                                            // function that check if the class of the card is the same as the other card
};
let checkend = 0;
let score = document.getElementById('score');

function match(){                                                             // function that check if card1 and card2 have the same class
    if (firstCardChosed.className == secondCardChosed.className) {
        points = points + 25;
        checkend++;
        console.log(firstCardChosed.className +" OK "+ secondCardChosed.className);

        pointTxt.innerHTML = "Your Score is: " + points;                    
        cantClick();   
        if(checkend == 6)                                                     // 6 mean all cards are got match each match = 1, 6 = everymatch
        {
            timerSet();                                                       // stop or continu the timer
            setTimeout(() => {                                                
             for(let showCard of showCards)
             {
              showCard.style.display = 'none';                                // make all the cards display none 
             }
            continer_screen_end.style.display = 'flex';                       // show the display of the score
            score.innerHTML =points;                              // write the points
         }, 800); 
        }                                              
        return;
    } else {
        flipBack();                                                           // flip back the cards function will active                  
        // console.log(points);
                       // let it click back
                      // let it click back
    }                                                                 
};
function cantClick(){
    firstCardChosed.removeEventListener('click', flipTheCard);                // remove the option to click the card
    secondCardChosed.removeEventListener('click', flipTheCard);               // remove the option to click the card
};
function cantClickAll()
{
    cards.forEach( card => card.removeEventListener('click', flipTheCard));   
}
const flips = document.querySelectorAll('.flip');  
function canClick(){
    cards.forEach( card => card.addEventListener('click', flipTheCard)); 
    flips.forEach( flip => flip.removeEventListener('click', flipTheCard)); 
}
function flipBack (){
    cantClickAll();
    setTimeout(() => {                                                        // setting delay so the card will flip toghether after watching the cards
        firstCardChosed.classList.remove('flip');                             // remove the class flip from the card ( it means that the card will flip back)
        secondCardChosed.classList.remove('flip'); 
        firstCardChosed.addEventListener('click', flipTheCard); 
        secondCardChosed.addEventListener('click', flipTheCard); 
        canClick();  
        console.log(firstCardChosed.className+""+secondCardChosed.className);                         // remove the class flip from the card ( it means that the card will flip back)
        if ( points === 0) {                                                  // that will happend if points = 0
            points = 0;                                                       // setting points to 0 
            return;
        } else {                                                              // if points not equal to 0 it will happen
            points = points - 5;                                              // points - 25
            pointTxt.innerHTML = "Your Score is: " + points;
            return;
        }
    }, 800);  
                                                              // 800 means 0.8 sec
};
cards.forEach( card => card.addEventListener('click', flipTheCard));          // forEach loop that active the function that adding a class to the element


//******************************
//---script for screen end---
//******************************

//RESET

play_again = document.getElementById('play_again');
continer_screen_end = document.getElementById('continer_screen_end');
play_again.addEventListener('click' , (event) =>{                             // make function on clicking "play again" btn
    continer_screen_end.style.display = 'none';                               // remove the popup display
    checkend=0;                                                               // reset the checkend so it will count matches from the start 
    for(let showCard of showCards)                                            
    {
        showCard.style.display = 'inherit';                                   //getting back the display of the cards
    }
    resetTimer();                                                             //reset the timer by function
});

//TO Pass Parameters to SCORE PAGE

function screenPage(){
    const queryString2 = window.location.search;
    const urlParams2 = new URLSearchParams(queryString2);
     txt_username_screen = urlParams2.get('user_name');
     email_screen = urlParams2.get('email');

 let newURL ="ScorePage.html"+'?user_name='+ txt_username_screen + "&email=" + email_screen + "&score=" + score.textContent +"&timer=" + minutes.textContent+":"+seconds.textContent ;
 return newURL;
}

//******************************
//----------The End-------------
//******************************

