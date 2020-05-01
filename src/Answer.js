import React, {Component} from 'react';

class Answer extends Component {
    render() {
        return (
            <div>
                <input id={"ContainerAnswer"} placeholder={"Answer?"}
                       type={"text"} value={this.props.quiz.question.userAnswer || ''}
                       onChange={(event) => {
                           this.props.onQuestionAnswer(event.target.value);
                       }}
                       ref="txt"
                />
            </div>
        );
    }

}

export default Answer;