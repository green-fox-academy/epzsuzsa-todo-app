/*
TODO osztály és metódusai – egy pédány tartalmaz egy feladatot
*/

"use strict";

export class ToDo {
    
    constructor(descriptionOfToDo, completed = false) {
        this.descriptionOfToDo = descriptionOfToDo;
        this.completed = completed;
    }
    
    setCompleted() {
        this.completed = true;
    }

    printToDo() {
            return `[${this.completed ? 'x' : ' '}] ${this.descriptionOfToDo}`; 
    }
}

