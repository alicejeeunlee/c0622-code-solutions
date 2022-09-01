import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function List(pokemon) {
  return <li>{pokemon.value}</li>;
}

function PokemonList(props) {
  const listItems = pokedex.map(pokemon =>
    <List key={pokemon.number.toString()} value={pokemon.name} />
  );
  return <ul>{listItems}</ul>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<PokemonList />);

// More Concise Solution
// const element = (
//   <ul>
//     {
//       pokedex.map(pokemon => {
//         return <li key={pokemon.number}>{pokemon.name}</li>;
//       })
//     }
//   </ul>
// );

// root.render(element);
