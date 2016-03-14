var React = require('react');

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> Patience... It is LOADING! </p>
        : <p> Confirm Battle! </p>
}

module.exports = ConfirmBattle;
