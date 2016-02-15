var ForumAnswers = React.createClass({
	render: function() {
		var allAnswers = this.props.allAnswers;
		var answers = [];
		for (var prop in allAnswers) {
			if (allAnswers.hasOwnProperty(prop)) {
				answers.push(<ForumAnswer key={prop} id={prop} answer={allAnswers[prop]} />);
			}
		}

		return (
			<div> {answers} </div>
		);
	}
});