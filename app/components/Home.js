var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home () {
        return (
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>GitHub Battle Grounds</h1>
                <p className="lead">Some Fancy Motto</p>
                <Link to='/playerOne'>
                    <button className="btn btn-lg btn-success">
                        Get Started
                    </button>
                </Link>
            </div>
        )
}

module.exports = Home;
