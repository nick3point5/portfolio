import React from 'react';

class NewGamePage extends React.Component {
  state = {
    title: '',
    publisher: '',
    coverArtUrl: '',
    completed: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/v1/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.props.history.push('/games');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Add A New Game</h1>

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

          <button type="submit">Add Game</button>
        </form>

      </div>
    );
  }
}

export default NewGamePage;
