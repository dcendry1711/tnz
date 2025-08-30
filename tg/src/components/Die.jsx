export default function Die(props){
    return(
        <button 
            style={props.isHeld ? {background: '#59E391' } : null} 
            className="game-btn"
            onClick={() => props.hold(props.id)}
            >
                {props.value}
            </button>
    )
}