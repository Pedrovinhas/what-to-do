const taskInput = document.querySelector('#new-task')
const taskButton = document.querySelector('#new-task-btn')
const newTaskList = document.querySelector('.task-list')
const newTaskItem = document.querySelector('.task-item')
const darkMode = document.querySelector('.fa-moon');
const lightMode = document.querySelector('.fa-sun');

darkMode.addEventListener('click', () => {
    const container = document.querySelector('.container')

    container.classList.toggle('active')
    container.classList.add('smooth')

    setTimeout( () => {
        container.classList.remove('smooth')
    }, 300)
    
    darkMode.style.display = 'none'
    lightMode.style.display = 'block'
})

lightMode.addEventListener('click', () => {
    const container = document.querySelector('.container')

    container.classList.toggle('active')
    container.classList.add('smooth')

    setTimeout( () => {
        container.classList.remove('smooth')
    }, 300)
    
    darkMode.style.display = 'block'
    lightMode.style.display = 'none'
})



taskButton.addEventListener('click', addNewTask)

function addNewTask() {
    if (taskInput.value.trim() != 0) {
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
            <span class="task-span"> ${task} </span>
        </div>
        <div class="task-menu">
            <i class="fa-solid fa-pen" onClick="updateTask(${index})"></i> 
            <i class="fa-solid fa-trash" onClick="deleteTask(${index})"></i>
        </div>
    </div>
        `
    })
    newTaskList.innerHTML = toDoList


}
showList()

function deleteTask(index) {

    let localTasks = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)

    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList()
}



/*
function updateTask(index) {
   let updatedTask = document.querySelector('.task-span')
   let value = updatedTask.innerHTML = `<input class="update-task"> `

    let localTasks = JSON.parse(localStorage.getItem('localItem'))
    localTasks == null ? taskList = [] : taskList = localTasks
  
    let updateInput = document.querySelector('.update-task')

    taskList.splice(index, index, value)

    updateInput.setAttribute('readonly', 'true')

    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList()

}

*/

