const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));


if(todos) {
  todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
});

function addTodo(todo) {
  let todoText = input.value 

  if(todo) {
    todoText = todo.text //accept a text in the input
  }
  if(todoText) {
    const todoEl = document.createElement('li')
    if(todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText
    todoEl.addEventListener('click', () => {
       todoEl.classList.toggle('completed')
       updateLs()
    }) // marked after the right click
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      updateLs()
    })

    todosUL.appendChild(todoEl)
    input.value = '' // clear the input
    updateLs()
  }
}

function updateLs() {
   todosEl = document.querySelectorAll('li')

  const todos = []

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}
 // Daily Tasks Form
const formDay = document.getElementById('form-daily');
const inputDay = document.getElementById('input-daily');
const todosUlDay = document.getElementById('todos-daily');

const dayTodos = JSON.parse(localStorage.getItem('todos-daily'));


if(dayTodos) {
  dayTodos.forEach(dailyTodo => addDailyTodo(dailyTodo))
}

formDay.addEventListener('submit', (e) => {
  e.preventDefault()

  addDailyTodo()
});

function addDailyTodo(dailyTodo){
  let todoDailyText = inputDay.value;
  
  if(dailyTodo){
    todoDailyText = dailyTodo.text;
  }
  if(todoDailyText){
    const todoDayEl = document.createElement('li')
    if(dailyTodo && dailyTodo.dailyCompleted) {
      todoDayEl.classList.add('completed')
    }
    todoDayEl.innerText = todoDailyText
    todoDayEl.addEventListener('click', () => {
       todoDayEl.classList.toggle('completed')
    updateDailyLs()
    }) // marked after the right click
    todoDayEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoDayEl.remove()
      updateDailyLs()
    })
    todosUlDay.appendChild(todoDayEl)
    inputDay.value = '' // clear the input
    updateDailyLs()
  }
}

function updateDailyLs() {
   todosDayEl = document.querySelectorAll('li')

  const dayTodos = []

  todosDayEl.forEach(todoDayEl => {
    dayTodos.push({
      text: todoDayEl.innerText,
      completed: todoDayEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos-daily', JSON.stringify(dayTodos))
}