const globalArray = require('./GlobalArray')
import Project from './Project'
import { format } from 'date-fns'
const create = require('./create')

export default class Dom {

    domStuff() {
        this.add()
        this.delete()
        this.taskFunctions()
    }

    add() {
        const add = document.querySelectorAll('.add')
        add.forEach(button => {
            button.addEventListener('click', (e) => {

                const parent = e.target.parentElement.parentElement
                const task = parent.querySelector('.task')
                const newTask = document.createElement('input')
                document.activeElement.blur()
                newTask.setAttribute('autofocus', true)
                newTask.setAttribute('id', 'add-task')
                const newDate = document.createElement('input')
                newDate.setAttribute('type', 'datetime-local')
                newDate.required = true
                const today = format(new Date(), 'yyyy-MM-dd')
                newDate.setAttribute('value', `${today}T12:00`)
                task.appendChild(newTask)
                task.appendChild(newDate)

                const priorityValues = ['Very Important', 'Important', 'Least Important']
                const priority = document.createElement('select')
                priority.setAttribute('id', 'priority')
                for (let i = 0; i < 3; i++) {
                    const option = document.createElement('option')
                    option.setAttribute('value', priorityValues[i])
                    option.textContent = priorityValues[i]
                    priority.appendChild(option)
                    task.appendChild(priority)
                }

                const br = document.createElement('br')
                task.appendChild(br)

                const buttonDiv = document.createElement('div')
                buttonDiv.className = 'littleContainer'
                task.appendChild(buttonDiv)

                const newBtn = document.createElement('button')
                newBtn.textContent = 'Add'
                newBtn.className = 'littleAdd'
                buttonDiv.appendChild(newBtn)

                const cancel = document.createElement('button')
                cancel.textContent = 'Cancel'
                cancel.className = 'littleCancel'
                buttonDiv.appendChild(cancel)

                cancel.addEventListener('click', () => {
                    newTask.remove()
                    newBtn.remove()
                    newDate.remove()
                    priority.remove()
                    br.remove()
                    cancel.remove()
                })

                newBtn.addEventListener('click', () => {

                    const formattedTime = format(new Date(newDate.value), "iiii MMMM dd, yyyy' at 'h:mm b")
                    newTask.remove()
                    newBtn.remove()
                    newDate.remove()
                    priority.remove()

                    const taskArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className].Description
                    const dueDateArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className]['Due Date']
                    const priorityArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className].Priority
                    const finishedArr = globalArray.get()[e.target.parentElement.previousElementSibling.previousElementSibling.className].Finished
                    taskArr.push(newTask.value)
                    dueDateArr.push(formattedTime)
                    priorityArr.push(priority.value)
                    finishedArr.push(false)
                    create.create()
                    const a = new Project
                    a.loadWindow()
                    this.domStuff()



                })
            })
        })
    }

    delete() {
        const modalWindow = document.querySelector('#modal')
        const delButton = document.querySelectorAll('.delete')
        delButton.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
                globalArray.get().splice(index, 1)
                modalWindow.classList.add('hidden')
                create.create()
                const a = new Project
                a.loadWindow()
                this.domStuff()
            })
        })
    }

    createIcon(iconPath) {
        let img = require(`./icons/${iconPath}`)
        const picture = document.createElement('img')
        picture.src = img
        return img
    }

    taskFunctions() {

        
        const accept = document.querySelectorAll('.accept')
        const remove = document.querySelectorAll('.remove')

        accept.forEach((button) => {
            button.addEventListener('click', (e) => {
                const finishedArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className].Finished
                if (!finishedArr[e.target.parentElement.parentElement.className]) {
                    
                    const task = e.target.parentElement.previousElementSibling.previousElementSibling
                    task.classList.add('line')
                    const priority = e.target.parentElement.previousElementSibling
                    priority.style.color = 'grey'
                    const priorityColor = e.target.parentElement.previousElementSibling.firstElementChild
                    priorityColor.style.color = 'grey'
                    finishedArr[e.target.parentElement.parentElement.className] = true;
                } else {
                    
                    const task = e.target.parentElement.previousElementSibling.previousElementSibling
                    task.classList.remove('line')
                    const priority = e.target.parentElement.previousElementSibling
                    priority.style.color = 'black'
                    const priorityColor = e.target.parentElement.previousElementSibling.firstElementChild
                    priorityColor.style.color = 'red'
                    finishedArr[e.target.parentElement.parentElement.className] = false;
                }


            })
        })

        remove.forEach((button) => {
            button.addEventListener('click', (e) => {
                const taskArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className].Description
                const dueDateArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className]['Due Date']
                const priorityArr = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className].Priority
                const finished = globalArray.get()[e.target.parentElement.parentElement.parentElement.previousElementSibling.className].Finished
                taskArr.splice(e.target.parentElement.parentElement.className, 1)
                dueDateArr.splice(e.target.parentElement.parentElement.className, 1)
                priorityArr.splice(e.target.parentElement.parentElement.className, 1)
                finished.splice(e.target.parentElement.parentElement.className, 1)
                create.create()
                const a = new Project
                a.loadWindow()
                this.domStuff()
            })
        })
    }
}