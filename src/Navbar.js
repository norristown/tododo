import { format } from "date-fns";
import Sidebar from "./Sidebar";


export default class Navbar {
    constructor(text, icon, className) {
        this.text = text;
        this.icon = icon;

        this.element = document.createElement('li')
        this.element.className = className;
        this.element.id = 'li-container'
        this.element.innerHTML = `

            <img class="icon" src="${icon}">
            <div class="navText">
                ${text}
            </div>

        `
    }

    createNavbar() {
        const navbarContent = [
            {
                text: 'Menu',
                icon: this.createIcon('menu.png')
            },
            {
                text: 'Search',
                icon: this.createIcon('magnify.png')
            },
            {
                text: 'Add Project',
                icon: this.createIcon('plus.png')
            },
            {
                text: 'Notifications',
                icon: this.createIcon('bell.png')
            },
            {
                text: 'Home',
                icon: this.createIcon('home-account.png')
            }
        ];

        const headerLeft = document.querySelector('.header-left')
        const headerCenter = document.querySelector('.header-center')
        const headerRight = document.querySelector('.header-right')

        for (let i = 0; i < navbarContent.length; i++) {
            const liItem = new Navbar(navbarContent[i].text, navbarContent[i].icon, `li-container-${i}`)
            if (i < 2) {
                headerLeft.appendChild(liItem.element)
            } else {
                headerRight.appendChild(liItem.element)
            }
        }

        const today = new Sidebar
        headerCenter.appendChild(today.createDiv('date', `Today is ${this.createDate()}`))

    }

    createIcon(iconPath) {
        let img = require(`./icons/${iconPath}`)
        const picture = document.createElement('img')
        picture.src = img
        return img
    }

    createDate() {
        const today = format(new Date(), 'MMMM dd, yyyy')
        return today;
    }
}