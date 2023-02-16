// Types intersection
type User = {
    id: number;
    name: string;
};

type Char = {
    nickname: string;
    level: number; 
}

// Intersection
type PlayerInfo = User & Char; // unindo os tipos

let info: PlayerInfo = { // definindo os tipos em uma nova variavel
    id: 1,
    name: 'Raphael',
    nickname: 'ph',
    level: 99,
}