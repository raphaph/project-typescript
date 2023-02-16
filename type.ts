// TYPE
// Definimos tipagem como se fosse uma variável que pode ser reutilizada

type idType = string | number; // sintaxe para definição

let userId: idType;
let adminId: idType;

// userId = true; // erro
userId = 2; // correto

// INTERFACE
// Diferença

type user = {
    id: number;
    name: string;
}

// a diferença é o igual, inexistente no interface

interface payment {
    method: string;
}

// criando outro type e interface
type userPayment = user & payment // TYPE
interface IuserPayment extends user, payment {} // INTERFACE

