import { useState } from "react";
import handleFetch from "../utils/handleFetch";

const PokemonForm = () => {
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [frontImage, setFrontImage] = useState('');
    const [backImage, setBackImage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, front: frontImage, back: backImage, hp: hp }),
        };
        const url = 'http://localhost:4000/pokemon';
        const response = await handleFetch(url, options);
        // const data = await response.json();

        // 4. When handling submissions, we can simply reference the input state values.
        console.log(name, hp, frontImage, backImage);

        // 5. Remember to reset the state values after submission.
        setName('');
        setHp('');
        setFrontImage('');
        setBackImage('')
    }



    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => setHp(e.target.value)}
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={frontImage} onChange={(e) => setFrontImage(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={backImage} onChange={(e) => setBackImage(e.target.value)} />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
