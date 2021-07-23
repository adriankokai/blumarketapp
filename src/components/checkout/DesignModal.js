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
          data-target="designModal"
        >
          {this.props.design}
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="designModal"
          className="modal"
        >
          <div className="modal-content">
            <h4>select size</h4>
            <form action="#">
                <p onClick={() => this.props.changeDesign("printed")}> 
                    <label>
                        {
                            this.props.design === 'printed' ?

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
                        <span>Printed</span>
                    </label>
                </p>
                <p onClick={() => this.props.changeDesign("plain")}>
                    <label>
                        {
                            this.props.size === 'plain' ?

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
                        <span>plain</span>
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