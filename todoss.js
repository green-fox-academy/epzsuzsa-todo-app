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
        todosFile.writeTodosToFile(this.todoss);
    }

    removeToDoFromFile(indexOfTodo, todosFile) {
        this.todoss = this.todoss.slice(0, indexOfTodo-1).concat(this.todoss.slice(indexOfTodo, this.todoss.length))
        todosFile.writeTodosToFile(this.todoss);
    }

    listTodoSS(todosFile) {
        //todosFile.writeTodosToFile(this.todoss); A tesztnél kellett beírni
        console.log(this.printToDoSS());
    }

    setCompletedTodo(indexOfTodo, todosFile) {
        this.todoss[indexOfTodo - 1].setCompleted();
        todosFile.writeTodosToFile(this.todoss);
    }

    printToDoSS() {
        return this.todoss
            .map((todo, index) => `${index + 1}. ${todo.printToDo()}`)
            .join('\n');
    }

    amountOfToDo() {
        return this.todoss.length;
    }
}
