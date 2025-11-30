import { Component } from "react";
import "../components/Modal.css";

class Modal extends Component {
  state = {
    timer: 0,
  };


  modalKeyClose = (event) => {
    if (event.key === "Escape") {
      this.props.isModalClose();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.modalKeyClose);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.modalKeyClose);
    clearInterval(this.timer);

  }

     componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
   this.timer = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
    } else if (prevProps.isOpen && !this.props.isOpen) {
      setTimeout(() => {
          clearInterval(this.timer);
  this.setState({ timer: 0 });
      }, 1000)
      
    }
     }

  render() {
    const modalOpen = this.props.isOpen ? "overlayOpenModal" : "overlay";
    return (
      <div className={modalOpen}>
        <div className="modal">
          <button
            className="modalButtonClose"
            onClick={this.props.isModalClose}
          >
            ⨉
          </button>
          <h2 className="modalText">Модальне вікно</h2>
          <p>Timer: {this.state.timer} </p>
        </div>
      </div>
    );
  }
}

export default Modal;
