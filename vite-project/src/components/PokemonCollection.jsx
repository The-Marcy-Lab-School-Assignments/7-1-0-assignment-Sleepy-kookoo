import PokemonCard from './PokemonCard';
import PokemonContent from '../context/PokemonContext';
import { useContext } from 'react';
// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    const allPokemon = useContext(PokemonContent).allPokemon

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} front={pokemon.front} back={pokemon.back} hp={pokemon.hp} />)}
        </div>
    )
}

export default PokemonCollection