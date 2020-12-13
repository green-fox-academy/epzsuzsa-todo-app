import minimist from 'minimist';
import fs from 'fs';
import { ToDoSS } from './todoss.js';
import { FileAccesToDo } from './FileAccesTodo.js';

const args = minimist(process.argv);
let optionIndex = process.argv[2];
let optionValue = process.argv[3];

console.log('process.argv', process.argv[2]);
console.log('process.argv', process.argv[3]);
console.log('minimist', args);

let todosFile = new FileAccesToDo('todos.json');
let todoInFile = todosFile.readTodosFromFile;

switch (optionIndex) {
    case undefined:
        prinUserManual();
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


function prinUserManual() {
    console.log(" Parancssori Todo applikáció",'\n', 
        "=============================",'\n', 
        "Parancssori argumentumok:",'\n\n', 
        "- l   Kilistázza a feladatokat",'\n', 
    "- a   Új feladatot ad hozzá",'\n', 
    "- r   Eltávolít egy feladatot",'\n', 
    "- c   Teljesít egy feladatot",'\n');
}
