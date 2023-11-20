import React from "react";
import { Modal } from "react-bootstrap";
import "./Vault.scss";
import CountDown from "./CountDown";

const ClaimDetailsModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="claim-details-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Claim Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="claim-details">
            <div className="current">
              Current Fee:
              <span className="primarys-text fw-semibold"> 2 USDC</span>
            </div>
            <p>
              You must pay a{" "}
              <span className="primarys-text fw-semibold">2 USDC</span> fee per{" "}
              <br /> week per stake to claim rewards.
            </p>
            <button>Approve USDC</button>
            <div className="comdown">
              <CountDown timeTillDate={new Date("2023-11-16T00:00:00.000Z")} />{" "}
              till next fee payment
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClaimDetailsModal;
