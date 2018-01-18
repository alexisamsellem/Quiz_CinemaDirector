var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  if (slideIndex==6){
    finalresult();
    console.log(result);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


function getanswer1(n){
  if(document.getElementById("Fincher")){
  answer1 = n;
  console.log(answer1);
  } else if (document.getElementById("Tarantino")){
   answer1 = n;
   console.log(answer1);
  } else if (document.getElementById("Nolan")){
  answer1 = n;
  console.log(answer1);
  }else if (document.getElementById("Anderson")){
   answer1 = n;
   console.log(answer1); 
  }
  answer1= parseInt(answer1);
  return answer1
  }

function getanswer2(n){

  if(document.getElementById("character").checked){
    answer2 = 1;
    console.log(answer2);
  } else if (document.getElementById("dialogue").checked){
     answer2 =2;
     console.log(answer2);
  } else if (document.getElementById("emotion").checked){
    answer2 = 3;
    console.log(answer2);
  }else if (document.getElementById("symetrie").checked){
   answer2 = 4;
   console.log(answer2); 
  }
   answer2= parseInt(answer2);

  return answer2
  }

function getanswer3(n){

  if(document.getElementById("context").checked){
    answer3 = 1;
    console.log(answer3);
  } else if (document.getElementById("trunk").checked){
     answer3 =2;
     console.log(answer3);
  } else if (document.getElementById("emotion").checked){
    answer3 = 3;
    console.log(answer3);
  }else if (document.getElementById("flat").checked){
   answer3 = 4;
   console.log(answer3); 
  }
   answer3= parseInt(answer3);
  
  return answer3
  }

function getanswer4(n){

  if(document.getElementById("BradP")){
    answer4 = n;
    console.log(answer4);
  } else if (document.getElementById("SamL")){
     answer4 = n;
     console.log(answer4);
  } else if (document.getElementById("GuyP")){
    answer4 = n;
    console.log(answer4);
  }else if (document.getElementById("BillM")){
   answer4 = n;
   console.log(answer4); 
  }
   answer4= parseInt(answer4);

  return answer4
  }

function getanswer5(n){

  if(document.getElementById("Pixies")){
    answer5 = n;
    console.log(answer5);
  } else if (document.getElementById("Madonna")){
     answer5 = n;
     console.log(answer5);
  } else if (document.getElementById("Zimmer")){
    answer5 = n;
    console.log(answer5);
  }else if (document.getElementById("Seu")){
   answer5 = n;
   console.log(answer5); 
  }
   answer5= parseInt(answer5);
  return answer5;
  }

 

function finalresult() {

  var result = answer1 + answer2 + answer3 + answer4 + answer5;
 
    if (result < 7) {
        document.getElementById("finalimg").src="http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2015/08/David-Fincher-014.jpg";
        document.getElementById("finaltext").innerHTML= "You are David Fincher";


} else if (result >= 8 && result <=11){
        document.getElementById("finalimg").src="http://www.tasteofcinema.com/wp-content/uploads/2016/03/quentin-tarantino.jpg";
        document.getElementById("finaltext").innerHTML= "You are Quentin Tarantino";

} else if (result >= 12 && result <= 16){
        document.getElementById("finalimg").src="https://ewedit.files.wordpress.com/2015/01/christopher-nolan_612x380_1-1.jpg?w=612";
        document.getElementById("finaltext").innerHTML= "You are Christopher Nolan";

} else if (result > 16){
        document.getElementById("finalimg").src="http://the-talks.com/wp-content/uploads/2015/04/Wes-Anderson-01.jpg";
        document.getElementById("finaltext").innerHTML= "You are Wes Anderson";

        }
}



