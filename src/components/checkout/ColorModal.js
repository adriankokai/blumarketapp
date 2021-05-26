import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="colorModal"
        >
          {this.props.color}
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="colorModal"
          className="modal"
        >
          <div className="modal-content">
            <h4>select color</h4>
            <form action="#">
                <p onClick={() => this.props.changeColor("white")}> 
                    <label>
                        {
                            this.props.color === 'white' ?

                            <input 
                                name="color" 
                                type="radio"
                                checked
                            />

                            :

                            <input 
                                name="color" 
                                type="radio"
                            />
                        }
                        <span>white</span>
                    </label>
                </p>
                <p onClick={() => this.props.changeColor("black")}>
                    <label>
                        {
                            this.props.color === 'black' ?

                            <input 
                                name="color" 
                                type="radio"
                                checked
                            />

                            :

                            <input 
                                name="color" 
                                type="radio"
                            />
                        }
                        <span>black</span>
                    </label>
                </p>
                <p onClick={() => this.props.changeColor("purple")}>
                    <label>
                        {
                            this.props.color === 'purple' ?

                            <input 
                                name="color" 
                                type="radio"
                                checked
                            />

                            :

                            <input 
                                name="color" 
                                type="radio"
                            />
                        }
                        <span>purple</span>
                    </label>
                </p>
            </form>
          </div>
          <div class="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              close
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;