var ForumAnswers = React.createClass({
	displayName: "ForumAnswers",

	render: function () {
		var allAnswers = this.props.allAnswers;
		var answers = [];
		for (var prop in allAnswers) {
			if (allAnswers.hasOwnProperty(prop)) {
				answers.push(React.createElement(ForumAnswer, { key: prop, id: prop, answer: allAnswers[prop] }));
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