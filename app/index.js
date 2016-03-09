var React = require('react');
var ReactDOM = require('react-dom');

var Kaydi = React.createClass({
    render: function () {
        var name = 'Kaydi Bolos';
        var favs = ['Pizza', 'Running', 'Mountains'];
        var work = 'Full-Time Student as WSU';
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">{name}</h1>
                </div>
                <div className="panel-body">
                    <Favorites things={favs} />
                    <Work job={work} />
                </div>
            </div>
        )
    }
});

var Andy = React.createClass({
    render: function() {
        var name = 'Andy Bolos';
        var favs = ['Cheesburger', 'Guava', 'Dragon', 'Monster'];
        var work = 'State of Utah IT Anaylist II'
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">{name}</h1>
                </div>
                <div className="panel-body">
                    <Favorites things={favs} />
                    <Work job={work} />
                </div>
            </div>
        )
    }
});

// var Jace = React.createClass({
//     render: function () {
//         var name = 'Jace Wilson';
//         var favs = ['4-Runners', 'Guns', 'Picklejuice'];
//         var work = 'Flying Hoptiocopters at MTN Ridge';
//         return (
//             <Card info={bio} />
//         )
//     }
// });

var Hulk = React.createClass({
    render: function () {
        var bio = {
            'hero': 'Hulk',
            'spells': ['Syrum', 'Red Green Sauce', 'FlyingSaucerFish'],
            'food': 'Smashacados'
        }
        return (
            <Card info={bio}/>
        )
    }
})
var Card = React.createClass({
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">{this.props.info.hero}</h1>
                </div>
                <div className="panel-body">
                    <Favorites things={this.props.info.spells} />
                    <Work job={this.props.info.food} />
                </div>
            </div>
        )
    }
})

var Favorites = React.createClass({
    render: function() {
        var items = this.props.things.map(function(item) {
            return (
                <li>{item}</li>
            )
        });
        return (
            <div>
                <h3>Favorite Things</h3>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
})

var Work = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Place of Employment</h3>
                <h4>{this.props.job}</h4>
            </div>
        )
    }
});


var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <Kaydi />
                <Andy />
                <Hulk />
            </div>
        )
    }
});


ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
