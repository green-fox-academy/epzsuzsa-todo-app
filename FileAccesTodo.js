import fs from 'fs';
import { ToDoSS } from './todoss.js';
import { ToDo } from './todo.js';

export class FileAccesToDo {
    fileName;

    constructor(fileName) {
        this.fileName = fileName;
    }

    readTodosFromFile() {

        let jsonContent = fs.readFileSync(this.fileName, 'utf-8');
        let jsonTodos = JSON.parse(jsonContent);
        let tempTodoList = new ToDoSS;

        for (let i in jsonTodos) {
            tempTodoList.addToDo(new ToDo(jsonTodos[i].descriptionOfToDo, jsonTodos[i].completed));
        }

        return tempTodoList; // visszaadja a TodoListát
    }

    writeTodosToFile(todoss) {
       // console.log('Write ', todoss);
        fs.writeFileSync(this.fileName, JSON.stringify(todoss, null, 4));
    }

    appendToFile(todo) {
        fs.appendFileSync(this.fileName, JSON.stringify(todo, null, 4));
    }
}
