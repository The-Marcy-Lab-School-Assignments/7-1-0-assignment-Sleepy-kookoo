// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react"

const PokemonCard = ({ name, front, back, hp }) => {
    const [toggle, setToggle] = useState(front)

    const handleClick = () => {
        if (toggle === front) setToggle(back)
        else setToggle(front)
    }

    return (
        <div className="ui card">
            <div className="card">
                <div className="image">
                    <img alt={name} src={toggle} onClick={handleClick} />
                </div>
                <div className="content">
                    <div className="header">Pokemon name: {name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        Pokemon HP : {hp}
                    </span>
                </div>
            </div>
        </div >
    )
}

export default PokemonCard