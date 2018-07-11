import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

export default class ClientApp extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Calculate Something</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ClientApp />,
  document.getElementById('root')
);