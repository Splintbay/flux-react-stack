/**
 * Created by skagespjelkavik on 22/08/14.
 *
 * @jsx React.DOM
 */
var React = require('react');

var test = 'Hello world';

React.renderComponent(
    <div>{test}</div>,
    document.getElementById('app')
);