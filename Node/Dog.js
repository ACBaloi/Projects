module.exports = class Dog {
    constructor(name) {
        this.name = name;
    }

    praise() {
        return `Good dog, ${this.name}!`
    }
}