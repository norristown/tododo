class TodayGlobal {
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

let todayGlobal = new TodayGlobal()
module.exports = todayGlobal;