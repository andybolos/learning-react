var React = require('react');

function puke (obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> Patience... It is LOADING! </p>
        : <div> Confirm Battle! {puke(props)}</div>
}

module.exports = ConfirmBattle;
