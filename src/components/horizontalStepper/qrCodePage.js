import React from "react";
import { Card } from "react-bootstrap";
import { Button, Image, Box } from "@chakra-ui/react";

const Final = ({ values, qrCodeUrl }) => {
  const { language, account, cryptocurrency } = values;

  // Function to handle the download
  const download = () => {
    // Create a temporary anchor element for downloading the QR code image
    const link = document.createElement("a");
    link.href = qrCodeUrl; // Use the QR code URL as the download source
    link.setAttribute("download", "qr-code.png"); // Set the file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Card style={{ textAlign: "left", width: "50%" }}>
        <Card.Body>
          <p style={{ fontSize: "21px", fontWeight: "bold" }}>Your Account was created successfully.</p>
          <br />
          <p style={{ fontSize: "17px" }}>
            <strong>Language:</strong> {language}{" "}
          </p>
          <p style={{ fontSize: "17px" }}>
            <strong>Account:</strong> {account}{" "}
          </p>
          <p style={{ fontSize: "17px" }}>
            <strong>Cryptocurrency:</strong> {cryptocurrency}{" "}
          </p>
        </Card.Body>
      </Card>
      <br />
      {qrCodeUrl && (
        <>
          <p>Your QR Code:</p>
          <Image
            src={qrCodeUrl}
            alt="Generated QR Code"
            width="50%" // Adjusts the width to 50% of the screen
            mt="10px"
            height="50%"
          />
          <br />
          <Button
            colorScheme="blue"
            mt="10px"
            style={{ width: "200px" }}
            onClick={download} // Call the download function when clicked
          >
            Download
          </Button>
        </>
      )}
    </Box>
  );
};

export default Final;
