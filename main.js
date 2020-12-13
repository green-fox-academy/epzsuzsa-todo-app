import minimist from 'minimist';
import fs from 'fs';


// console.log( process.argv.slice(2) );
//console.log( args );

'use strict'

// minimist egy függvény, aminek a process.argv-t kell átadni
const args = minimist( process.argv );

let fileContent = fs.readFileSync('todo_user_manual.txt', 'utf-8');
console.log(fileContent);

console.log(args);