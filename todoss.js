/*
TODOS osztály és metódusai – az osztály tartalmaz egy TODO listát
*/

"use strict";
import { ToDo } from './todo.js';

class ToDoSS {

    constructor() {
        this.todoss = [];
    }

    addToDo(todo) {
        this.todoss.push(todo);
    }

    removeToDo(indexOfTodo) {
        this.todoss = this.todoss.splice(indexOfTodo, 1);
    }


    //readTodosFromFile 7 

    //writeTodosToFile 

    
    printToDoSS() {
        return this.todoss
            .map((todo, index) => `${index + 1}. ${todo.printToDo()}`)
            .join('\n');
    }

    amountOfToDo() {
        return this.todoss.length;
    }
}

export { ToDoSS };