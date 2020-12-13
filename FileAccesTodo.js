export class FileAccesToDo {
    fileName;

    constructor(fileName) {
        this.fileName = fileName;
    }

    // parse .json content
    readTodosFromFile() {

        let jsonContent = fs.readFileSync(this.fileName, 'utf-8');
        let jsonTodos = JSON.parse(jsonContent);

        return jsonTodos; // visszaadja a TodoListát
    }

    writeTodosToFile(jsonTodos) {
        fs.writeFileSync(this.fileName, JSON.stringify(jsonTodos, null, 4));
    }

    appendToFile(todo) {
        fs.appendFileSync(this.fileName, JSON.stringify(todo, null, 4));
    }

}
