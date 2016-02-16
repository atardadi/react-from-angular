var ForumAnswers = React.createClass({
	displayName: "ForumAnswers",

	_onMarkCorrect: function (id) {
		ForumDispatcher.dispatch({
			actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
			id: id
		});
	},
	render: function () {
		var allAnswers = this.props.allAnswers;
		var answers = [];
		for (var prop in allAnswers) {
			if (allAnswers.hasOwnProperty(prop)) {
				answers.push(React.createElement(ForumAnswer, { key: prop, id: prop, answer: allAnswers[prop], onMarkCorrect: this._onMarkCorrect }));
			}
		}

		return React.createElement(
			"div",
			null,
			" ",
			answers,
			" "
		);
	}
});