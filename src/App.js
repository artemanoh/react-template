import { Component } from "react";
import "./App.css";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    isOpen: false,
  };

  isModalOpen = () => {
    this.setState({ isOpen: true });
  };
  isModalClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h2>Натисніть на кнопку для відкриття модального вікна</h2>
        <button className="modalButtonOpen" onClick={this.isModalOpen}>Відкрити модалку</button>
        <Modal isModalClose={this.isModalClose} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default App;
