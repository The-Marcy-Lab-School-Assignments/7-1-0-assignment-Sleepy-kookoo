// TODO: This component should render a single pokemon's stats and image.


const PokemonCard = ({ name, front, back, hp }) => {

    return (
        <div className="ui card">
            <div className="card">
                <div className="image">
                    <img alt={name} src={front} />
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