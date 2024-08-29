// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useEffect, useState, useContext } from "react"
import PokemonContent from "../context/PokemonContext";
import handleFetch from "../utils/handleFetch";

const Filter = () => {
    const [input, setInput] = useState('');
    const setPokemon = useContext(PokemonContent).setAllPokemon

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch('http://localhost:4000/pokemon');
            if (data) setPokemon(data.filter(({ name }) => name.includes(input)));
            // if (error) setError(error);
            console.log(data)
        };
        doFetch()
    }, [input])

    console.log("hi")

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." value={input} onChange={(e) => setInput(e.target.value)} />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter