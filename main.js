var player1_name_input="player1_name_input";
var player2_name_input="player2_name_input";
function add_user(){
  player1_name=document.getElementById("player1_name_input").value
  player2_name=document.getElementById("player2_name_input").value
  localStorage.setItem("player1_name",player1_name);
   localStorage.setItem("player2_name",player2_name);
  window.location="game_page.html";
    
  }

function send(){
  number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;  
  actual_answer=parseInt(number1)*parseInt(number2);
  question_number="<h4>"+number1+"X"+number2+"</h4>";
 input_box="<br>Answer : <input type' id='input_check_box'";
  check_button="<br><br><button class='bnt bnt-info' onclick='check()'>Check</button>";
  row=questionplayer1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
}
function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h5>" + number1 + " X " + number2 + "</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}_number+input_box+check_button;
  document.getElementById("output").innerHTML=row;
  document.getElementById("number1").value=" ";
  document.getElementById("number2").value=" ";
