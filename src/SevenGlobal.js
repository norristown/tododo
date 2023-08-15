class SevenGlobal {
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
    clear() {
        this.array = []
    }
}

let sevenGlobal = new SevenGlobal()
module.exports = sevenGlobal;