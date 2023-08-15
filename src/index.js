import './style.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Project from './Project'
const seven = require('./next7Days')
const create = require('./create')
import globalArray from './GlobalArray'
import Dom from './Dom'
const dueToday = require('./today')
const loadLocalStorage = require('./localStorage')

// loadLocalStorage.loadLocalStorage()

const page = new Navbar
const sidebar = new Sidebar
const content = document.querySelector('.content')

sidebar.createSidebar()
page.createNavbar()
const project = new Project
const addClick = document.querySelector('.li-container-2')
project.loadWindow()
addClick.addEventListener('click', () => {
    project.click()
})

const homeText = document.createElement('h1')
homeText.textContent = 'Click Add Project To Get Started'
homeText.classList.add('home-text')
content.appendChild(homeText)

sidebar.sideBarSelect()
const sevenBtn = document.querySelector('.sidebar-item-2')
sevenBtn.addEventListener('click', seven.next7Days)

const allProjects = document.querySelector('.sidebar-item-0')
allProjects.addEventListener('click', () => {
    if (globalArray.get().length === 0) {
        content.innerHTML = ''
        homeText.textContent = 'Click Add Project To Get Started'
        homeText.classList.add('home-text')
        content.appendChild(homeText)
        project.loadWindow()
    } else {
        create.create()
        project.loadWindow()
        const b = new Dom
        b.domStuff()
    }
})

const today = document.querySelector('.sidebar-item-1')
today.addEventListener('click', dueToday.today)



