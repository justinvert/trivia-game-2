

    var counters =  document.getElementById("counter");
    var checkActive = 0;
    var correctAnswer3 = true;
    var correctAnswer4 = true;


    var quiz1 = ["CMLL (Mexico)","NJPW (Japan)","WWE (US)", "Impact Wrestling (Canada)"];
    var quiz2 = ["WWE (US)","Impact Wrestling (Canada)","ROH (US)"];
    var quiz3 = ["Korakuen Hall","The Tokyo Dome","Osaka-Jo Hall", "Madison Square Garden"];
    var quiz4 = ["Florida Championship Wrestling","Deep South Wrestling","Ohio Valley Wrestling", "NXT"];

    var countdown = 10;
 

    document.getElementById("question").addEventListener("click", startGame);

    function startGame(){
       fullGame();
       counting();
       quiz();
       
       var countFast = setInterval(counting, 1000);

       onClick = this.style.display = 'none';
    }
    
    function fullGame(){
        document.getElementById("start").innerHTML = "<div style='display:inline;'>Pro-Wrestling Trivia Quiz</div>";
       
     
    }

   
    
    function counting(){

   
        if (countdown > 0){

        countdown--;
       counters.innerHTML = "Time Remaining: " + countdown + " seconds";
}

else if (countdown === 0) {
    clearInterval(counting);
    quizEnd();
    disable();
    quizEnd2();
    disable2();
    quizEnd3();
    disable3();
    quizEnd4();
    disable4();
 

}


// else  {
//         clearInterval(counting);
       
        
//         // disable();
//     //    
//     //   play = false; 
   
//         disable2();
//         quizEnd2();
     
//         // disable2();
//         // disable3();
//         // disable4();

//          }
         
        
    }

function disable(){
  document.getElementById('submitbutton').setAttribute("disabled", "disabled");
  document.getElementById('a').setAttribute("disabled", "disabled");
  document.getElementById('b').setAttribute("disabled", "disabled");
  document.getElementById('c').setAttribute("disabled", "disabled");
  document.getElementById('d').setAttribute("disabled", "disabled");
}
function disable2(){
  document.getElementById('a2').setAttribute("disabled", "disabled");
  document.getElementById('b2').setAttribute("disabled", "disabled");
  document.getElementById('c2').setAttribute("disabled", "disabled");
}
  function disable3(){
  document.getElementById('a3').setAttribute("disabled", "disabled");
  document.getElementById('b3').setAttribute("disabled", "disabled");
  document.getElementById('c3').setAttribute("disabled", "disabled");
  document.getElementById('d3').setAttribute("disabled", "disabled");
}
  function disable4(){
  document.getElementById('aNew').setAttribute("disabled", "disabled");
  document.getElementById('bNew').setAttribute("disabled", "disabled");
  document.getElementById('cNew').setAttribute("disabled", "disabled");
  document.getElementById('dNew').setAttribute("disabled", "disabled");
}

    function quiz(){
        document.getElementById("question1").innerHTML = 
        "<b>" + "Which choice below is currently the oldest wrestling promotion in existence?" + " </b>" +"</br>" +
        "<form id ='quiz' name = 'quiz'>" +
        "<input type='radio' name='firstQuestion' value='A' id='a' />" + quiz1[0]  +
        "<input type='radio' name='firstQuestion' value='B' id='b' />"  + quiz1[1]  +
        "<input type='radio' name='firstQuestion' value='C' id='c' />"  + quiz1[2]  +
        "<input type='radio' name='firstQuestion' value='D' id='d' />"  + quiz1[3] + '<br>' +
        "<input type='submit' name='submit' value='Submit' id='submitbutton' onclick='quizCheck(); return false' />"  +
        "</form>" ;
     
    }
function quizNew(){
         document.getElementById("question2").innerHTML = 
        "<b>" + "Which promotion currently uses a 20 count when the competitors leave the ring?" + " </b>" +"</br>" +
        "<form id ='quiz2' name = 'quiz2'>" +
        "<input type='radio' name='secondQuestion' value='A' id='a2' />"  + quiz2[0]  +
        "<input type='radio' name='secondQuestion' value='B' id='b2' />"  + quiz2[1] +
        "<input type='radio' name='secondQuestion' value='C' id='c2' />"  + quiz2[2] + '<br>' +
        "<input type='submit' name='submit1' value='Submit' id='submitbutton2' onclick='quizCheck2(); return false' />"  +
        "</form>" ;
        $('#question1').hide();
        // $('#testAnswers').hide();
        clearTimeout(myVar);
        countdown = 10;
        
      
        
}
function quizNew2(){
           document.getElementById("question3").innerHTML = 
        "<b>" + "New Japan Pro-Wrestling hosts a show every January 4th in:" + " </b>" +"</br>" +
        "<form id ='quiz3' name = 'quiz3'>" +
        "<input type='radio' name='thirdQuestion' value='A' id='a3' />"  + quiz3[0]  +
        "<input type='radio' name='thirdQuestion' value='B' id='b3' />"  + quiz3[1] +
        "<input type='radio' name='thirdQuestion' value='C' id='c3' />"  + quiz3[2] + 
        "<input type='radio' name='thirdQuestion' value='D' id='d3' />"  + quiz3[3] + '<br>' +
        "<input type='submit' name='submit2' value='Submit' id='submitbutton3' onclick='quizCheck3(); return false' />"  +
        "</form>" ;
        $('#question2').hide();
        $('#testAnswers').hide();
        clearTimeout(myVar3);
        countdown = 10;
}
function quizNew3(){
          document.getElementById("question4").innerHTML = 
        "<b>" + "In 2018, WWE's developmental brand uses the name:" + " </b>" +"</br>" +
        "<form id ='quiz4' name = 'quiz4'>" +
        "<input type='radio' name='fourthQuestion' value='A' id='aNew' />"  + quiz4[0]  +
        "<input type='radio' name='fourthQuestion' value='B' id='bNew' />"  + quiz4[1] +
        "<input type='radio' name='fourthQuestion' value='C' id='cNew' />"  + quiz4[2] +
        "<input type='radio' name='fourthQuestion' value='D' id='dNew' />"  + quiz4[3] +'<br>' +
        "<input type='submit' name='submit3' value='Submit' id='submitbutton4' onclick=''quizCheck4(); return false' />"  +
        "</form>" ;
        $('#question3').hide();
        $('#testAnswers').hide();
        clearTimeout(myVar3);
        countdown = 10;
 
 }
    function stopCount(){
        countdown = 0;
        counters.innerHTML = "";
        document.getElementById("start").innerHTML = "<div style='display:inline;'>Pro-Wrestling Trivia Quiz</div>";

    }

 var myVar;
 var myVar2;
 var myVar3;
 var myVar4;
 var correct = 0; 
// var play = false;
    function quizCheck(){
      
        var correctAnswer1 = document.quiz.firstQuestion.value;
      
        countdown = null;
        if (correctAnswer1 === "A" && countdown === null){
       
            document.getElementById("testAnswers").innerHTML = quiz1[0] + " is the correct answer!";
            document.getElementById("question1").style.color = 'green';
            myVar = setTimeout(quizNew, 5000); 
            correct++;
            stopCount();
         countdown = null;
           document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
        // play = true;
    }

  else   {
    quizEnd();
    disable();
     
      }
}

function quizEnd(){

    
    document.getElementById("question1").style.color = 'red';
    document.getElementById("testAnswers").innerHTML = quiz1[0] + " was the correct answer";
    stopCount();
      myVar = setTimeout(quizNew, 5000);
      document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";


    }

    function quizEnd3(){

    
        document.getElementById("question3").style.color = 'red';
        document.getElementById("testAnswers").innerHTML = quiz3[1] + " was the correct answer";
        stopCount();
          myVar3 = setTimeout(quizNew3, 5000);
          document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
    
    
        }

        function quizEnd4(){

    
            document.getElementById("question4").style.color = 'red';
            document.getElementById("testAnswers").innerHTML = quiz4[3] + " was the correct answer";
            stopCount();
              myVar4 = setTimeout(quizNew4, 5000);
              document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
        
        
            }


function quizEnd2(){
    document.getElementById("question2").style.color = 'red';
    document.getElementById("testAnswers").innerHTML = quiz2[2] + " was the correct answer";
    stopCount();
    myVar2 = setTimeout(quizNew2, 5000);
      document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
}

    function quizCheck2(){
var correctAnswer2 = document.quiz2.secondQuestion.value;
countdown = null;
      if (correctAnswer2 === "C" && countdown === null){
        document.getElementById("testAnswers").innerHTML = quiz2[2] + " is the correct answer!";
        document.getElementById("question2").style.color = 'green';
        correct++;
        countdown = null;
        stopCount();
        myVar2 = setTimeout(quizNew2, 5000);
        document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
    
   
    }

    else   {
        quizEnd2();
        disable2();
         
          }

}
function quizCheck3(){
    var correctAnswer3 = document.quiz3.thirdQuestion.value;
    countdown = null;
   
   if (correctAnswer3 === "B"){
      document.getElementById("testAnswers3").innerHTML = quiz3[1] + " is the correct answer!";
        document.getElementById("question3").style.color = 'green';
        correct++;
        countdown = null;
         
        myVar3 = setTimeout(quizNew3, 5000); 
        correct++;
        stopCount();
     
       document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
    
    }
    else
{
quizEnd3();
disable3();

}
function quizCheck4(){
var correctAnswer4 = document.quiz4.fourthQuestion.value;
countdown = null;
     if (correctAnswer4 === "D"){
        countdown = null;
     document.getElementById("testAnswers4").innerHTML = quiz4[3] + " is the correct answer!";
        document.getElementById("question4").style.color = 'green';
        myVar4 = setTimeout(quizNew4, 10000); 
        correct++;
        stopCount();
     
       document.getElementById("stats").innerHTML = "Status so far: " + correct + " out of 4 correct";
    

     
    }
else
{
    quizEnd4();
    disable4();

}
  
}}
