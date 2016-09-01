var MessageForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var user = this.refs.user.value.trim();
    var text = this.refs.text.value.trim();
    // Do nothing without user or text
    if (!user || !text) {
      return;
    }
    // Call the event on MessageBox
    this.props.onMessageSubmit({ user: user, text: text });
    // Remove value on form
    this.refs.user.value = '';
    this.refs.text.value = '';
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="user" />
        <input type="text" placeholder="Message" ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
