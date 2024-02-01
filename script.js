const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const button = document.querySelector('.btn')

button.addEventListener( 'click', (e) =>{
    // console.log(e.target.value)
    if(inputBox.value ==='' ){
        alert("wite osme ")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''
        
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        saveData()
    }
});

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks()