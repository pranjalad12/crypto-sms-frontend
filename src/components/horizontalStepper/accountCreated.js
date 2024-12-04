import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "@chakra-ui/react";

const StepFour = ({ nextStep, values }) => {
  const handleGenerateQRCode = () => {
    // Logic for generating QR Code can go here
    nextStep();
  };
  const { phoneNumber, passkey, amount, countryCode } = values;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px" }}>
      <Card>
        <Card.Body>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Your Account Created Successfully</p>
          <br />
          <p style={{ fontSize: "18px" }}>
            <strong>Phone Number:</strong> {countryCode}{" "}{phoneNumber}{" "}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Passkey:</strong> {passkey}{" "}
          </p>
          <p style={{ fontSize: "18px" }}>
            <strong>Max Amount:</strong> {amount}{" "}
          </p>
        </Card.Body>
        <br/>
        <Card.Body>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "18px" }}>You can now proceed to generate your QR code.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button colorScheme="blue" onClick={handleGenerateQRCode}>
              Generate QR Code
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepFour;
