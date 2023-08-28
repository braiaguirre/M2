const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.getElementById('valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const contador = store.getState().contador;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.textContent = contador;
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
const plusButton = document.getElementById('incremento');
const minusButton = document.getElementById('decremento');
const oddButton = document.getElementById('incrementoImpar');
const asyncButton = document.getElementById('incrementoAsync');
plusButton.addEventListener('click', () => store.dispatch(incremento(1)));
minusButton.addEventListener('click', () => store.dispatch(decremento()));
oddButton.addEventListener('click', () => store.getState().contador % 2 !== 0) && store.dispatch(incremento(1));
asyncButton.addEventListener('click', () => setTimeout(store.dispatch(incremento(1)), 2000));