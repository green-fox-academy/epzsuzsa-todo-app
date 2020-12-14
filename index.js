import minimist from 'minimist';
import { ToDoSS } from './todoss.js';
import { ToDo } from './todo.js';
import { FileAccesToDo } from './FileAccesTodo.js';

const args = minimist(process.argv);
let optionIndex = process.argv[2];
let optionValue = process.argv[3];

let todosFile = new FileAccesToDo('todos.json');
let todoList = todosFile.readTodosFromFile();

//3 db Todo a teszthez
/*
todoList.addToDo(new ToDo('Kutyát sétáltatni'));
todoList.addToDo(new ToDo('Tejet venni'));
todoList.addToDo(new ToDo('Megcsinálni a leckét'));
*/

switch (optionIndex) {
    case undefined:
        prinUserManual();
        break;
    case "-l":
        if (!todoList.amountOfToDo()) {
            console.log("Nincs mára tennivalód");
        } else {
            todoList.listTodoSS(todosFile);
        }
        break;
    case "-a":
        if (optionValue == undefined) {
            console.log("Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!");
        } else {
            todoList.addToDoToFile(optionValue, todosFile);
        }
        break;
    case "-c":
        if (!testOptionValue(optionValue)) {
            todoList.setCompletedTodo(optionValue, todosFile);
        }
        break;
    case "-r":
        if (!testOptionValue(optionValue)) {
            todoList.removeToDoFromFile(optionValue, todosFile);
        }
        break;

    default: console.log("Nem támogatott argumentum!");
}



function testOptionValue(optionValue) {
    if (optionValue == undefined) {
        console.log("Nem lehetséges a feladat végrehajtása, nem adtál meg indexet!");
        return true;
    } else if (!Number.isInteger(Number(optionValue))) {
        console.log("Nem lehetséges a feladat végrehajtása, a megadott index nem szám!");
        return true;
    } else if (todoList.amountOfToDo() < optionValue || optionValue <= 0) {
        console.log("Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott!");
        return true;
    }
    return false;
}

function prinUserManual() {
    console.log(" Parancssori Todo applikáció", '\n',
        "=============================", '\n',
        "Parancssori argumentumok:", '\n\n',
        "- l   Kilistázza a feladatokat", '\n',
        "- a   Új feladatot ad hozzá", '\n',
        "- r   Eltávolít egy feladatot", '\n',
        "- c   Teljesít egy feladatot", '\n');
}