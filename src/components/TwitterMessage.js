import React from "react";

class TwitterMessage extends React.Component {
  state = {
      wordCount: this.props.maxChars,
      tweet: ""
    };


  setWordCount= (event) =>{
    this.setState({
      wordCount : this.state.wordCount - 1,
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.setWordCount} value={this.state.tweet}type="text" />
        <p>{this.state.wordCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
