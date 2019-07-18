import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectOption}>Okay</button>
    </Modal>
  </div>
);

export default OptionModal;
