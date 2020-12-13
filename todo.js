/*
TODO osztály és metódusai – egy pédány tartalmaz egy feladatot
*/

"use strict";

class ToDo {
    
    constructor(descriptionOfToDo) {
        this.descriptionOfToDo = descriptionOfToDo;
        this.completed = false;
    }
    
    isCompleted() {
        return this.completed;
    }

    setCompleted() {
        this.completed = true;
    }

    printToDo() {
            return `[${this.completed ? 'x' : ' '}] ${this.descriptionOfToDo}`; 
    }

}

export { ToDo };
