/*
TODOS osztály és metódusai – az osztály tartalmaz egy TODO listát
*/

"use strict";
import { ToDo } from './todo.js';

export class ToDoSS {

    constructor() {
        this.todoss = [];
    }

    addToDo(todo) {
        this.todoss.push(todo);
    }

    removeToDo(indexOfTodo) {
        this.todoss = this.todoss.splice(indexOfTodo, 1);
    }

    listTodoSS(todosFile) {
        this.addToDo(new ToDo('Kutyát sétáltatni'));
        this.addToDo(new ToDo('Tejet venni'));
        this.addToDo(new ToDo('Megcsinálni a leckét'));

        todosFile.writeTodosToFile(this.todoss);   
        console.log(this.printToDoSS());
    }

    //readTodosFromFile 

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
