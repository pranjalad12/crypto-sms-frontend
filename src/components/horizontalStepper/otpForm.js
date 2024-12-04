import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { Input, Button, Flex } from "@chakra-ui/react";
import axios from "axios";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitFormData = async (e) => {
    e.preventDefault();

    if (!values.otp || values.otp.trim() === "") {
      setError(true);
      setErrorMessage("This is a required field");
      return;
    }

    try {
      // Make API call to /verifyOTP
      const fullPhoneNumber = `${values.countryCode}${values.phoneNumber}`;
      const response = await axios.post("http://localhost:4000/api/verifyOtp", {
        phoneNumber: fullPhoneNumber, // Assuming phoneNumber is available in `values`
        otp: values.otp,
      });
      // If successful, move to the next step
      console.log("API Response:", response.data);
      setError(false);
      setErrorMessage("");
      nextStep();
    } catch (err) {
      // Handle API errors
      console.error("API Error:", err.response?.data || err.message);
      setError(true);
      setErrorMessage(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Enter the OTP: </Form.Label>
              <br />
              <br />
              <Input
                placeholder="Enter your OTP"
                value={values.otp || ""} // Assuming `otp` field in `values`
                onChange={(e) => handleFormData("otp", e.target.value)}
                isInvalid={error}
                errorBorderColor="red.500"
                color="white"
                bg="transparent"
              />
              {error && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {errorMessage}
                </div>
              )}
            </Form.Group>

            <Flex mt={5} justify="space-between">
              <Button colorScheme="blue" onClick={prevStep} w="15%">
                Previous
              </Button>
              <Button colorScheme="blue" type="submit" w="15%">
                Verify
              </Button>
            </Flex>
            <br />
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
