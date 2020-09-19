$(document).ready(function(){
    $("#menu_icon").click(function(){
        $(".open_sidbar").toggleClass("small_sidebar");
        $('.remove_text').toggleClass('text_hide');
        $('#content_body').toggleClass('margin_left');
    });
});




function openbookmarks()
{
  document.getElementById('que1 box').style.dispay='block';
  document.getElementById('bookmarks').style.display='';
  document.getElementById('gauges').style.display='none';
}

function closebookmarks()
{
  
 document.getElementById('bookmarks').style.display='none';
  document.getElementById('gauges').style.display='';
  document.getElementById('step1').style.display='block';
 
}
function step1()
{
  document.getElementById('step1 box').style.display='block';
  document.getElementById('gauges').style.display='none';
  
}

function closestep1()
{
  document.getElementById('gauges').style.display='block';
  document.getElementById('step1 box').style.display='none';
  document.getElementById('step1').style.display='none';
  document.getElementById('step2').style.display='block';
}

function step2()
{
  document.getElementById('que1 box').style.dispay='block';
  document.getElementById('step2 box').style.display='block';
  document.getElementById('gauges').style.display='none';
 
}
function closestep2()
{
  document.getElementById('step2 box').style.display='none';
  document.getElementById('step2').style.display='none';
  document.getElementById('box1').style.display='';

}
function closebx1(){
  document.getElementById('box1').style.display='none';
  
  
  document.getElementById('box3').style.display='';

}
var answer1="";
var abswer2="";
function closebx3(){
  document.getElementById('box3').style.display='none';

  
document.getElementById('box4').style.display='';
answer1= document.getElementById("answer1").value;
answer2 = document.getElementById("answer2").value;
var score=0; var f1=0; var f2=0;
if(answer1=="c")
{score=score+1; f1=1;}
if(answer2=="a")
{score=score+1; f2=1;}

document.getElementById("score").innerHTML="You have scored<br>"+score+"/2.<br> <br>Answer Key : <br><br>Q1) c <br>Q2) a.";



}

function closebx4(){

  document.getElementById('box4').style.display='none';

  document.getElementById('gauges').style.display='block';

}


function closestep3()
{
  document.getElementById('step3 box').style.display='none';
  document.getElementById('gauges').style.display='block';

}
function current()
{
  document.getElementById('step4 box').style.display='block';
  document.getElementById('gauges').style.display='none';
}
function closestep4()
{
  document.getElementById('step4 box').style.display='none';
  document.getElementById('gauges').style.display='block';
  
}


function onsimulator()
{
  document.getElementById('step5 box').style.display='block';
  document.getElementById('gauges').style.display='none';
}
function closestep5()
{
  document.getElementById('step5 box').style.display='none';
  document.getElementById('gauges').style.display='block';
 
}


function hideSVG() {
    var style = document.getElementById("myRect").style.display;
    if(style === "block")
    {
      document.getElementById("myRect").style.display = "none";
      document.getElementById("myBtn").disabled = true;
      document.getElementById("onoff").value="Power ON";
      document.getElementById("amp").setAttribute("data-value", 0);
      document.getElementById("vol").setAttribute("data-value", 0);
      document.getElementById("temp1").setAttribute("data-value", 0);
      document.getElementById("temp2").setAttribute("data-value", 0);
      document.getElementById("temp3").setAttribute("data-value", 0); 
      document.getElementById("temp4").setAttribute("data-value", 0); 
      
    }
      
    else
    {
      document.getElementById("myRect").style.display = "block";
      document.getElementById("myBtn").disabled = false;
      document.getElementById("onoff").value="Power OFF";
     

    }

      
    var dfgf = document.getElementById("switch").style.display;
    if(dfgf === "block")
      document.getElementById("switch").style.display = "none";
    else
      document.getElementById("switch").style.display = "block";
    //or to hide the all svg
    //document.getElementById("mySvg").style.display = "none";
  }

    $(document).ready(function(){
        $("#myModal").modal('show');
    });
      
  
   
   


  