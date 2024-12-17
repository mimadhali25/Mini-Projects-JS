const button = document.querySelector("button");
const modalcontainer = document.querySelector(".modalcontainer");
const closebtn = document.querySelector(".close");
const body = document.querySelector("body");
//Adding event listeners
button.addEventListener("click",function()
{
        modalcontainer.classList.toggle("hidden");
});
closebtn.addEventListener("click",function()
{
        modalcontainer.classList.toggle("hidden");
});
document.addEventListener("click",function(e)
{
    if(e.target === body)
    {
        modalcontainer.classList.add("hidden"); // add the hidden class
    }
});
