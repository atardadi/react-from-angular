var React = require('react');
var ForumAnswer = require('./ForumAnswer.react');
var ForumActions = require('../actions/ForumActions');

var ForumAnswers = React.createClass({
	_onMarkCorrect: function(id) {
		ForumActions.markAnswerCorrect(id);
	},
	render: function() {
		var allAnswers = this.props.allAnswers;
		var answers = [];
		for (var prop in allAnswers) {
			if (allAnswers.hasOwnProperty(prop)) {
				answers.push(<ForumAnswer key={prop} id={prop} answer={allAnswers[prop]} onMarkCorrect={ this._onMarkCorrect} />);
			}
		}

		return (
			<div> {answers} </div>
		);
	}
});

module.exports = ForumAnswers;