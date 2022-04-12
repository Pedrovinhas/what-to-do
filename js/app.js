const taskInput = document.querySelector('#new-task')
const taskButton = document.querySelector('#new-task-btn')
const newTaskList = document.querySelector('.task-list')
const newTaskItem = document.querySelector('.task-item')


taskButton.addEventListener('click', addNewTask)

function addNewTask() {

    if(taskInput.value.trim()  != 0) {
        let localTasks = JSON.parse(localStorage.getItem('localItem'))
        localTasks == null ? taskList = [] : taskList = localTasks
    
        taskList.push(taskInput.value)
    
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    taskInput.value = ''
    showList()
   
}

function showList() {

    let toDoList = ''
    let localTasks = JSON.parse(localStorage.getItem('localItem'))

    localTasks == null ? taskList = [] : taskList = localTasks

    taskList.forEach((task, index) => {
        toDoList += `
        <div class="task-item">
        <div class="task-content">
            <input type="checkbox">
            <span> ${task} </span>
        </div>
        <div class="task-menu">
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash" onClick="deleteTask(${index})"></i>
        </div>
    </div>
        `
    })

    newTaskList.innerHTML = toDoList
}
showList()

function deleteTask (index) {
    let localTasks = JSON.parse(localStorage.getItem('localItem'))

    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList()
}


 /* 
 const taskItem = document.createElement('div')

taskItem.classList.add('task-item')

taskItem.innerHTML = `
  
    `
taskList.appendChild(taskItem)

<div class="task-item">
             <div class="task-content">
                <input type="checkbox">
                <span> Comprar comida </span>
             </div>
             <div class="task-menu">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
    </div>
            */