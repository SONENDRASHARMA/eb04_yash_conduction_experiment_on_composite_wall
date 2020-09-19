function calculation() {
  var voltage = document.getElementById("fname1").value;
  var current = document.getElementById("fname2").value;
  var vol=document.getElementById("fname1").value;
  var cur=document.getElementById("fname2").value;
  var val=vol*cur;
  
  var x=0;
  var d=0;
  if(val>24.0)
  {
    d=val-24.0;
    x=x+(0.08*d);
  }
  else if(val<24.0)
  {
    d=24.0-val;
    x=x-(0.08*d);
  }
 

  var t3h=34.5+x; var t3c=30.7+x; var t3s=23.5+x;

  
  document.getElementById("amp").setAttribute("data-value", current);
  document.getElementById("vol").setAttribute("data-value", voltage);
  document.getElementById("temp1").setAttribute("data-value", t3h);
  document.getElementById("temp2").setAttribute("data-value", t3c);
  document.getElementById("temp3").setAttribute("data-value", t3s); 
  document.getElementById("temp4").setAttribute("data-value", t3s); 
  
}
  
    



var mybt=document.querySelector(".b1");
var myoff=document.querySelector(".ig2");
var img=myoff.querySelector("img");



function machine()
{ 
  document.getElementById('start_button').style.display='none';
  document.getElementById('progress_bar').style.display='';
  document.getElementById('message').innerHTML='Machine is now started.'
  
  document.getElementById('sidebar').style.display='';
  document.getElementById('myProgress').style.display='none';
  document.getElementById('switch').setAttribute('src','images/on.png');
  document.getElementById('light').setAttribute('src','images/green.png');

}
function timer(){
  document.getElementById('progress_bar').style.display='';
  setInterval("machine()",1700);
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function togglesidebar()
{
    document.querySelector("#sidebar").classList.toggle("active");
    document.getElementById('step3 box').style.display='block';
    document.getElementById('gauges').style.display='none';
}

var i = 0;
function move() {
 
}

function mildsteel()
{
  document.getElementById('ms box').style.display='block';
  document.getElementById('gauges').style.display='none';
}

function closems()
{
  document.getElementById('ms box').style.display='none';
  document.getElementById('gauges').style.display='block'; 
}
function bakelite()
{
  document.getElementById('bakelite box').style.display='block';
  document.getElementById('gauges').style.display='none';
}
function closebk()
{
  document.getElementById('bakelite box').style.display='none';
  document.getElementById('gauges').style.display='block'; 
}
function wood()
{
  document.getElementById('wood box').style.display='block';
  document.getElementById('gauges').style.display='none';
}
function closewd()
{
  document.getElementById('wood box').style.display='none';
  document.getElementById('gauges').style.display='block'; 
}
function area()
{
  document.getElementById('area box').style.display='block';
  document.getElementById('gauges').style.display='none';
}
function closear()
{
  document.getElementById('area box').style.display='none';
  document.getElementById('gauges').style.display='block'; 
}

function know()
{
  document.getElementById('know box').style.display='block';
  document.getElementById('gauges').style.display='none';
}
function closekn()
{
  document.getElementById('know box').style.display='none';
  document.getElementById('gauges').style.display='block'; 
}


