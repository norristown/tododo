const globalArray = require('./GlobalArray')
const create = require('./create')
class CreateCard {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        this.obj = {
            'Title': this.title,
            'Description': [this.description],
            'Due Date': [this.dueDate],
            'Priority': [this.priority],
            'Finished': [false]
        }
        
        globalArray.add(this.obj)
        this.create = create.create()

    }
}

module.exports = CreateCard