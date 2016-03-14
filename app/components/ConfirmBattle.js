var React = require('react');
var PropTypes = React.PropTypes;


function puke (obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> Patience... It is LOADING! </p>
        : <div> Confirm Battle! {puke(props)}</div>
}

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
