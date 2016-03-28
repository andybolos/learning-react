var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getIntialState: function () {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function () {
        // githubHelpers.battle(this.props.location.state.playersInfo)
        // .then(function (scores) {
        //     this.setState({
        //         scores: scores,
        //         isLoading: true
        //     })
        // }.bind(this))
        console.log(this);
    },
    render: function () {
        return (
            <Results isLoading={this.state.isLoading}  scores={this.state.scores} />
        )
    }
});

module.exports = ResultsContainer;


// playersInfo={this.props.location.state.playersInfo}
