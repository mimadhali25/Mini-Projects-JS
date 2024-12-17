//select elements

const addbtn = document.querySelector(".addbtn");
const addedtask = document.querySelector(".addedtask");
const taskenter = document.querySelector(".taskenter");
const closebtn = document.querySelector(".close");
const modalcontainer = document.querySelector(".modalcontainer"); 
const body = document.querySelector("body"); 

// Function to show the modal
function showModal() {
    modalcontainer.classList.toggle("hidden");
}

// Function to hide the modal
function hideModal() {
    modalcontainer.classList.toggle("hidden");
}

// Event listener for Add Button
addbtn.addEventListener("click", function () {
    //show the modal if there is no task added
    if (taskenter.value === "") {
        showModal(); 
    } else {
        let task = document.createElement("div");
        task.classList.add("task");
        let li = document.createElement("li");
        li.innerText = `${taskenter.value}`;
        task.appendChild(li);
        let tick = document.createElement("button");
        tick.innerHTML = '<i class="fa-solid fa-check"></i>';
        tick.classList.add("checktask");
        task.appendChild(tick);
        let deleteIcon = document.createElement("button");
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteIcon.classList.add("deletetask");
        task.appendChild(deleteIcon);

        addedtask.appendChild(task);
        taskenter.value = ""; // Clear input 
    }
});

// Event listener for Close Button in the modal
closebtn.addEventListener("click", hideModal);

// Event listener for clicks outside the modal to close it
document.addEventListener("click", function (e) {
    if (e.target === modalcontainer) {
        hideModal();
    }
});

// event listeners for check and delete
addedtask.addEventListener("click", function (e) {
    if (e.target.closest(".checktask")) {
        const task = e.target.closest(".task");
        task.style.textDecoration = "line-through"; 
    }

    if (e.target.closest(".deletetask")) {
        const task = e.target.closest(".task");
        task.remove(); 
    }
});
