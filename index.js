import minimist from 'minimist';
import { ToDoSS } from './todoss.js';
import { FileAccesToDo } from './FileAccesTodo.js';
import { ToDo } from './todo.js';

const args = minimist(process.argv);
let optionIndex = process.argv[2];
let optionValue = process.argv[3];

let todosFile = new FileAccesToDo('todos.json');
let todoList = todosFile.readTodosFromFile();

/* 3 db Todo a teszthez
todoList.addToDo(new ToDo('Kutyát sétáltatni'));
todoList.addToDo(new ToDo('Tejet venni'));
todoList.addToDo(new ToDo('Megcsinálni a leckét'));
*/

console.log("Todolist a switch előtt ", todoList.todoss);

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
        if (optionValue == undefined) {
            console.log("Nem lehetséges a feladat végrehajtása, nem adtál meg indexet!");
        } else {
            todoList.setCompletedTodo(optionValue, todosFile);
        }
        break;

    default: console.log("Nem támogatott argumentum!");
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









// line replace
// const fileContent = fs.readFileSync( 'valami.txt', 'utf-8' );
// const lines = fileContent.split('\n');
// lines[12] = "Macskát sétáltatni";
// fs.writeFileSync( 'valami.txt', lines.join('\n') );

// parse .txt content
// const txtContent = fs.readFileSync( 'todos.txt', 'utf-8' );
// let txtTodos = txtContent.split('\n');

// txtTodos = txtTodos.map( ( todo ) => {
//     const todoDetails = todo.split(';');
//     return {
//         id: parseInt( todoDetails[0] ),
//         name: todoDetails[1],
//         done: todoDetails[2] === 'true' ? true : false
//     };
// } );

// console.log(txtTodos);

// txtTodos = txtTodos.map( ( todo ) => {
//     return `${ todo.id };${ todo.name };${ todo.done }`;
// } );

// fs.writeFileSync( 'todos.txt', txtTodos.join('\n') );



//node index.js -e --oldName="Kutyát sétáltatni" --newName="Medvét simogatni"
/*
if (args.e === true) {
    console.log( args.oldName );
    console.log( args.newName );
}
*/
