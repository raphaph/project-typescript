
// TIPAGENS
// type ANY, omar cuidado, pode causar erros
// let qualquer = any;

// --------------------------

// Definindo tipagem em uma variável
// Tipos primitivos
let loading: boolean; //BOOLEAN
let email: string; //STRING
let price: number; //NUMBER

let numbers: number[]; //ARRAY DE NUMBERS
let numbers2: Array<number>; //ARRAY NUMBERS

let users: Array<string>; //ARRAY DE TEXTOS
let users2: string[]; //ARRAY DE TEXTOS

// --------------------------

// Definindo a tipagem do retorno de uma função
function showMessages(messages: Array<number>): Array<number> { 
  return messages
}
// : void = Não aceita nenhum retorno
// : number = aceita apenas number como retorno
// : string = aceita apenas string como retorno
// : Array<number> = idem...

//----------------------------

// Operador UNION
// Define +1 ou mais tipagens para uma variavel ou parametro
function printUserId(id: number | string ) { 
	console.log(`id do usuário: ${id}`);
}

//----------------------------
