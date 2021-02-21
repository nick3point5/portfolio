import React from 'react';

class EditGamePage extends React.Component {
  state = {
    title: '',
    publisher: '',
    coverArtUrl: '',
    completed: false,
  };

  componentDidMount() {
    // match.params is passed to EditGamePage props by react-router-dom
    // You can console.log(this.props) in the render method below to see all the props passed to the EditGamePage container component.
    // the id param is set in the edit route in our config/routes.js 
    console.log('Getting Game')
    fetch(`http://localhost:4000/api/v1/games/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.setState(jsonData)
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/v1/games/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/games'))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Edit {this.state.title}</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="publisher">Publisher</label><br />
            <input type="text" id="publisher" name="publisher" value={this.state.publisher} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="coverArtUrl">Cover Art</label><br />
            <input type="text" id="coverArtUrl" name="coverArtUrl" value={this.state.coverArtUrl} onChange={this.handleChange} />
          </div>

          <button type="submit">Update Game</button>
        </form>

      </div>
    );
  }
}

export default EditGamePage;
