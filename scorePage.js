//***********************//
//*****DataCollector*****//
//***********************//


const queryScorePage = window.location.search;
 const urlParamsScore = new URLSearchParams(queryScorePage);
 //USER NAME
  user_name = urlParamsScore.get('user_name');
  email = urlParamsScore.get('email');
  timer = urlParamsScore.get('timer');
  score = urlParamsScore.get('score');

  user_name_score = document.getElementById('user_name_score');
  email_score = document.getElementById('email_score');
  timer_score = document.getElementById('timer_score');
  user_name_score_point = document.getElementById('user_name_score_point');
  point_score = document.getElementById('point_score');
  email_points = document.getElementById('email_score_points');

p = document.createElement('p');
p.innerHTML= "UserName : "+user_name;
user_name_score.appendChild(p);

p = document.createElement('p');
p.innerHTML= "Mail : "+email;
email_score.appendChild(p);

p = document.createElement('p');
p.innerHTML= "Time finish : "+timer;
timer_score.appendChild(p);

p = document.createElement('p');
p.innerHTML= "UserName : "+user_name;
user_name_score_point.appendChild(p);

p = document.createElement('p');
p.innerHTML= "Points : "+score;
point_score.appendChild(p);

p = document.createElement('p');
p.innerHTML = "Mail : "+email;
email_points.appendChild(p);


//***********************//
//***SortScore&Points****//
//***********************//

//points
let orderScore = document.querySelectorAll('.orderScore');
function sortScorePoint(){
    sortScoreTime();
    if ( score <= 25) {
        orderScore[0].style.order = '4';
        orderScore[1].style.order = '1';
        orderScore[2].style.order = '2';
        orderScore[3].style.order = '3';
    } else if ( score <= 35 ){
        orderScore[0].style.order = '3';
        orderScore[1].style.order = '1';
        orderScore[2].style.order = '2';
        orderScore[3].style.order = '4';
    } else if ( score <= 150 ){
        orderScore[0].style.order = '2';
        orderScore[1].style.order = '1';
        orderScore[2].style.order = '3';
        orderScore[3].style.order = '4';
    } else {
        orderScore[0].style.order = '1';
        orderScore[1].style.order = '2';
        orderScore[2].style.order = '3';
        orderScore[3].style.order = '4';
    }
};

//timer
let timeScore = timer[0] + timer[1] + timer[3] +timer[4];
let orderTime = document.querySelectorAll('.orderTime');
function sortScoreTime(){
    console.log('goooooooood');
    if( timeScore >= 0242 ) {
        orderTime[0].style.order = '4';
        orderTime[1].style.order = '1';
        orderTime[2].style.order = '2';
        orderTime[3].style.order = '3';
    } else if ( timeScore >= 0107) {
        orderTime[0].style.order = '3';
        orderTime[1].style.order = '1';
        orderTime[2].style.order = '2';
        orderTime[3].style.order = '4';
    } else if ( timeScore >= 0042 ) {
        orderTime[0].style.order = '2';
        orderTime[1].style.order = '1';
        orderTime[2].style.order = '3';
        orderTime[3].style.order = '4';
    } else {
        orderTime[0].style.order = '1';
        orderTime[1].style.order = '2';
        orderTime[2].style.order = '3';
        orderTime[3].style.order = '4';
    }
};

// pass parameters to mail 
function emailTo (mymail){

    let sendMessage= "mailto:" + email+"?"+"subject="+"Memory Game"+"&body="+"Hello my frined i wanted to share with you my score , my score is: "+ score + " and the time is: "+timer
    +" Score of onther players:" +" DanMenah his score 150 Point and time 00:42 "
    +"sapirOv her score 35 Point and time 01:07 "
    +"Billy his score 25 Point and time 02:24";;
    console.log(sendMessage);
    return sendMessage;
    } ;
    

//message Whatsapp

function massageWhatsapp(){
    let messageWhats= "https://wa.me/972556659200"+"?text="+"Hello my frined i wanted to share with you my score , my score is: "+ score + " and the time is: "+timer 
    +" Score of onther players:" +" DanMenah his score 150 Point and time 00:42 "
    +"sapirOv her score 35 Point and time 01:07 "
    +"Billy his score 25 Point and time 02:24";
    return messageWhats;
    };
    






// function sortTimeTable(){
//     let table,
//         rows,
//         switching,
//         i,
//         x,
//         y,
//         shouldSwitch;
//         table = document.getElementById('timeTable')
//         switching = true;
//         while (switching) {
//             switching = false;
//             rows = table.rows;
//             for(i = 0; i < (rows.length - 1); i++) {
//                 shouldSwitch = false;
//                 x = rows[i].getElementsByTagName("td")[2];
//                 y = rows[i + 1].getElementsByTagName("td")[2];
//                 if (x.value > y.value) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//             if(shouldSwitch){
//                 rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//                 switching = true;
//             }
//         }
// };

