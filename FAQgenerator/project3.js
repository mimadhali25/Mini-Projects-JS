const button = document.querySelectorAll(".section");
for(let i=0 ; i< button.length ; i++)
{
        button[i].addEventListener("click",function()
    {
        this.classList.toggle("active");
    });
}
/*
const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    section.addEventListener("click", function () {
        sections.forEach(sec => sec.classList.remove("active")); // Remove active class from all
        this.classList.add("active"); // Add active class to the clicked one
    });
});

*/
