import globalArray from "./GlobalArray";
import sevenGlobal from "./SevenGlobal";
const create = require('./create7')
import Project from "./Project";
import Dom from "./Dom";
import todayGlobal from "./TodayGlobal";
export function next7Days() {
    sevenGlobal.clear()
    let month;
    switch (new Date().getMonth()) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;
    }

    for (let i = 0; i < globalArray.get().length; i++) {
        const obj = {
            'Title': globalArray.get()[i].Title,
            'Description': [],
            'Due Date': [],
            'Priority': [],
            'Finished': []
        }
        sevenGlobal.add(obj)
        for (let j = 0; j < globalArray.get()[i]['Due Date'].length; j++) {
            const split = globalArray.get()[i]['Due Date'][j].split(' ')
            const getMonth = split[1]
            if (month === getMonth) {
                const getDay = split[2].replace(',', '')
                const today = new Date().getDate()
                if (getDay - today <= 7) {
                    const taskArr = globalArray.get()[i].Description[j]
                    const dueDateArr = globalArray.get()[i]['Due Date'][j]
                    const priorityArr = globalArray.get()[i].Priority[j]
                    const finishedArr = globalArray.get()[i].Finished[j]
                    obj.Description.push(taskArr)
                    obj['Due Date'].push(dueDateArr)
                    obj.Priority.push(priorityArr)
                    obj.Finished.push(finishedArr)
                    create.create()
                    const a = new Project
                    a.loadWindow()
                    const b = new Dom
                    b.domStuff()
                } else {
                    const content = document.querySelector('.content')
                    content.innerHTML = ''
                    const homeText = document.createElement('h1')
                    homeText.textContent = 'Nothing Due This Week'
                    homeText.classList.add('home-text')
                    content.appendChild(homeText)
                }
            }
        }
    }
}
