import Dom from './Dom'
const Card = require('./Card')
import { format } from 'date-fns'
import globalArray from './GlobalArray'

export default class Project {

    loadWindow() {

        //Create Form
        const content = document.querySelector('.content')
        const modalWindow = document.createElement('div')
        modalWindow.className = 'modal hidden'
        modalWindow.setAttribute('id', 'modal')
        content.appendChild(modalWindow)

        const h2 = document.createElement('h2')
        h2.textContent = 'Add Project'
        modalWindow.appendChild(h2)

        const closeButton = document.createElement('button')
        closeButton.textContent = '\u00D7'
        closeButton.classList.add('close-modal')
        modalWindow.appendChild(closeButton)
        closeButton.addEventListener('click', () => {
            modalWindow.classList.add('hidden')
        })

        const form = document.createElement('form')
        form.setAttribute('onsubmit', ' ')

        modalWindow.appendChild(form)

        const formInputs = ['Category:', 'Task: ', 'Due Date: ']
        const placeholder = ['Enter a category (e.g. "Work", "For Fun", etc.)', 'Enter a task to do (e.g. "Meeting with team")']

        for (let i = 0; i < formInputs.length; i++) {
            const label = document.createElement('label')
            label.textContent = formInputs[i]
            form.appendChild(label)
            const input = document.createElement('input')
            input.classList.add(`input-${[i]}`)
            input.setAttribute('placeholder', `${placeholder[i]}`)
            form.appendChild(input)
            form.appendChild(document.createElement('br'))
        }

        const priorityValues = ['Very Important', 'Important', 'Least Important']
        const priority = document.createElement('select')
        priority.setAttribute('id', 'priority')
        const label = document.createElement('label')
        label.textContent = 'Priority: '
        form.appendChild(label)
        for (let i = 0; i < 3; i++) {
            const option = document.createElement('option')
            option.setAttribute('value', priorityValues[i])
            option.setAttribute('id', `option-${i}`)
            option.textContent = priorityValues[i]
            priority.appendChild(option)
            form.appendChild(priority)
        }

        form.appendChild(document.createElement('br'))
        const submit = document.createElement('input')
        submit.value = 'Create New Project'
        submit.setAttribute('id', 'submit')
        submit.setAttribute('type', 'submit')
        form.appendChild(submit)

        const date = document.querySelector('.input-2')
        date.setAttribute('type', 'datetime-local')
        date.setAttribute('required', true)
        const today = format(new Date(), 'yyyy-MM-dd')
        date.setAttribute('value', `${today}T12:00`)

        // let globalArray_serialized = JSON.stringify(globalArray.get())
        // localStorage.setItem('localStorageArray', globalArray_serialized)
        globalArray.setLocalStorage()
        

        

        //Submit Data
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const selectedDateTime = format(new Date(date.value), "iiii MMMM dd, yyyy' at 'h:mm b")
            const card = new Card(document.querySelector('.input-0').value, document.querySelector('.input-1').value, selectedDateTime, document.querySelector('#priority').value)
            card.create
            this.loadWindow()
            const x = new Dom
            x.domStuff()
        })
    }

    click() {
        const modalWindow = document.querySelector('#modal')
        modalWindow.classList.remove('hidden')
    }
}