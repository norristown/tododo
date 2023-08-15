import todayGlobal from "./TodayGlobal";
export function create() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    for (let i = 0; i < todayGlobal.get().length; i++) {
    
        const cardDiv = document.createElement('div')
        cardDiv.setAttribute('id', 'card')
        cardDiv.className = `card${i}`
        content.appendChild(cardDiv)

        const titleDiv = document.createElement('div')
        titleDiv.className = [i]
        titleDiv.setAttribute('id', 'title')
        titleDiv.setAttribute('value', `${todayGlobal.get()[i].Title}`)
        titleDiv.innerHTML = `<div>Category: <span class="titleText">${todayGlobal.get()[i].Title}</span></div><button class="delete">Delete</button>`
        cardDiv.appendChild(titleDiv)

        const taskDiv = document.createElement('div')
        taskDiv.className = 'task'
        taskDiv.innerHTML = '<p class="taskText">Tasks: </p>'
        cardDiv.appendChild(taskDiv)

        for (let j = 0; j < todayGlobal.get()[i].Description.length; j++) {
            
            const pDiv = document.createElement('div')
            pDiv.setAttribute('id', 'p')
            pDiv.className = `${j}`
            pDiv.innerHTML = `
            <div class="task${j}">
                ${todayGlobal.get()[i].Description[j]} on ${todayGlobal.get()[i]['Due Date'][j]}
            </div>
            <div class="priorityText${j}" id="priorityText">
                Priority: <span class="priorityColor" id="priorityColor${j}">${todayGlobal.get()[i].Priority[j]}
            </div>
            <div class="imgContainer">
                <img src="${createIcon('accept.png')}" class="accept">
                <img src="${createIcon('remove.png')}" class="remove">
            </div>
            `

            taskDiv.appendChild(pDiv)
        }

        for (let j = 0; j < todayGlobal.get()[i].Finished.length; j++) {
            const card = document.querySelector(`.card${i}`)
            
            if (todayGlobal.get()[i].Finished[j]) {
                const task = card.querySelector(`.task${j}`)
                task.classList.add('line')
                const priority = card.querySelector(`.priorityText${j}`)
                priority.style.color = 'grey'
                const priorityColor = card.querySelector(`#priorityColor${j}`)
                priorityColor.style.color = 'grey'
            } 
        }
    }

    function createIcon(iconPath) {
        let img = require(`./icons/${iconPath}`)
        const picture = document.createElement('img')
        picture.src = img
        return img
    }
}