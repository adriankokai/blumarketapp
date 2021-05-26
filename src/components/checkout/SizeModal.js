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
          data-target="modal1"
        >
          {this.props.size}
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>select size</h4>
            <form action="#">
                <p onClick={() => this.props.changeSize("M")}> 
                    <label>
                        {
                            this.props.size === 'M' ?

                            <input 
                                name="size" 
                                type="radio"
                                checked
                            />

                            :

                            <input 
                                name="size" 
                                type="radio"
                            />
                        }
                        <span>M</span>
                    </label>
                </p>
                <p onClick={() => this.props.changeSize("L")}>
                    <label>
                        {
                            this.props.size === 'L' ?

                            <input 
                                name="size" 
                                type="radio"
                                checked
                            />

                            :

                            <input 
                                name="size" 
                                type="radio"
                            />
                        }
                        <span>L</span>
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