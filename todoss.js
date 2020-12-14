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

    addToDoToFile(todoDescription, todosFile) {
        this.addToDo(new ToDo(todoDescription));
        console.log("add to file: ", this.todoss);
        todosFile.writeTodosToFile(this.todoss);
        console.log("todoList ",this.todoss);
    }

    removeToDo(indexOfTodo) {
        this.todoss = this.todoss.splice(indexOfTodo, 1);
    }

    listTodoSS(todosFile) {
 
        todosFile.writeTodosToFile(this.todoss);   
        console.log(this.printToDoSS());
    }


    setCompletedTodo(indexOfTodo, todosFile) 

    
    
    printToDoSS() {
        return this.todoss
            .map((todo, index) => `${index + 1}. ${todo.printToDo()}`)
            .join('\n');       
    }

    amountOfToDo() {
        return this.todoss.length;
    }
}
