class GlobalArray {
    constructor() {
        this.array = [];
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
}

let globalArray = new GlobalArray()
module.exports = globalArray;