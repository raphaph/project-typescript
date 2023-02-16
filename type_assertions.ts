// TYPE ASSERTION
// Muito util para objetos ou json de API

type userResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as userResponse; // define o objeto q nao possui um tipo, par ao type userResponse

// Objects

type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`x: ${points.x} , y: ${points.y}`)   
}

printCoord({x: 102, y: 33})

//-------------------------------

type User = {
    id: number;
    name: string;
    age: number;
    isAdmin?: boolean; // a ? no isAdmin torna ele opcional
}

function printUser(users: User) {
    console.log(`id: ${users.id} name: ${users.name} age: ${users.age} isAdmin: ${users.isAdmin}`)
    
}

printUser({id: 1, name: "Raphael", age: 26, isAdmin: true})