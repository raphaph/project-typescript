// UNION 
function useState() {
    let state: number | string;

    function get() {
        return state;
    }

    function set(newValue: number | string) { // definindo 2 tipos com union, podemos alterar o tipo
        state = newValue;
    }

    return { get, set};
}

let newState = useState();

newState.get();
newState.set('Raphael'); // podemos intercalar tanto string
newState.set(123); // quanto number

// ---------------------------------------

// GENERIC
// Deixa flexivel as tipagens

/** conveções para representar generic
 * 
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 * 
 * Sintaxe exemplo<T>
 */ 

function useStateGeneric<T>() { // definimos o generic como T type
    
    let state: T; // nossa variavel carrega o generic

    function get() {
        return state;
    }

    function set(newValue: T) { // generic definindo o parametro
        state = newValue
    }

    return { get, set};
}

let newStateG = useStateGeneric<string | number>(); // e aqui passamos os tipos ao executar a função

newStateG.get();
newStateG.set('Raphael'); 
newStateG.set(123);