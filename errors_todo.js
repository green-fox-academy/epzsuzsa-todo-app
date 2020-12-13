// This file contains the errors with todos

export function MessageToConsole(messageType) {
    switch (messageType) {
        case "USER_MANUAL": // esetleg fájl?
            console.log("Parancssori Todo applikáció");
        case "EMPTY_LIST":
            console.log("Nincs mára tennivalód :)");
        case "TODO_MISSING":
            console.log("Nem lehetséges új feladat hozzáadása: nincs megadva feladat:");
        case "INDEX_MISSING":
            console.log("Nem lehetséges az eltávolítás: nem adott meg indexet");
    }
}