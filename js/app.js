/**
 * Created by skagespjelkavik on 22/08/14.
 *
 * @jsx React.DOM
 */
var React = require('react');

var test = 'Hello';

var TestButton = React.createClass({
    getInitialState: function () {
        return { text: "Hello" };
    },
    handleClick: function (event) {
        this.setState({ text: this.state.text + " World!"});
        test = this.state.text;
    },
    render: function () {
        var msg =  this.state.text;

        return (
            <button onClick={this.handleClick}>{msg}</button>
        );
    }

});

React.renderComponent(
    <div>
        <TestButton />
        <div>{test}</div>
    </div>,
    document.getElementById('app')
);