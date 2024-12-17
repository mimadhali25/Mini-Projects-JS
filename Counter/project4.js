//selecting the buttons

const play = document.querySelector(".start");
const reload = document.querySelector(".rotate");
//taking initial variables
let sec = 0;
let min = 0;
let hour = 0;
//adding the front zeroes
let leadingsec = 0;
let leadingmin = 0;
let leadinghour = 0;
//for setting the timer status and the intervals
let timerStatus = "stopped";
let timerInterval = null;

//main function logic
function counter()
{
    sec++;
    if(sec/60===1)
    {
        sec=0;
        min++;
   
    if(min/60===1)
    {
        min=0;
        hour++;
    }
}

if(sec<10)
{
    leadingsec = "0" + sec.toString();
}
else{
    leadingsec=sec;
}
if(min<10)
    {
        leadingmin = "0" + min.toString();
    }
    else{
        leadingmin=min;
    }
if(hour<10)
        {
            leadinghour = "0" + hour.toString();
        }
        else{
            leadinghour=hour;
        }
//appending 
let timer = document.querySelector(".timer");
timer.innerText = leadinghour + ":" + leadingmin + ":" + leadingsec ;
}
//adding the event listeners
play.addEventListener("click",function()
{
    
        if (timerStatus === "stopped") {
          timerInterval = window.setInterval(counter, 100); //timer functions
          timerStatus = "started";
          document.querySelector(".start").classList.remove("fa-play");
          document.querySelector(".start").classList.add("fa-pause");
        } else {
          window.clearInterval(timerInterval); // timer functions
          timerStatus = "stopped";
          document.querySelector(".start").classList.remove("fa-pause");
          document.querySelector(".start").classList.add("fa-play");
        }
      
});
reload.addEventListener("click",function()
{
    window.clearInterval(timerInterval);
    hour=0;
    min=0;
    sec=0;
    document.querySelector(".timer").innerText = "00:00:00";
})