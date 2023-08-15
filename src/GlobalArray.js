
class GlobalArray {
    constructor() {
        
        if (localStorage.getItem('localStorageArray') === '[]' || localStorage.getItem('localStorageArray') === 'null') {
            this.array = []
        } else {
            console.log('390248')
            this.array = this.getLocalStorage()
        }
    }

    add(item) {
        this.array.push(item);
    }
    get() {
        return this.array;
    }
    pop() {
        this.array.pop()
    }
    splice(index, num) {
        this.array.splice(index, num)
    }
    setLocalStorage() {
        this.globalArray_serialized = JSON.stringify(this.array)
        localStorage.setItem('localStorageArray', this.globalArray_serialized) 
    }
    getLocalStorage() {
        return JSON.parse(localStorage.getItem('localStorageArray'))
    }
}

let globalArray = new GlobalArray()
module.exports = globalArray;