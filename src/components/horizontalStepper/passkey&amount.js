import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Card,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const StepThree = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState({ passkey: false, amount: false });
  const [errorMessage, setErrorMessage] = useState("");

  const submitFormData = async (e) => {
    e.preventDefault();

    const isPasskeyInvalid = !values.passkey || !/^\d{4}$/.test(values.passkey); // Exactly 4 digits
    const isAmountInvalid = !values.amount || values.amount > 2000; // Cannot exceed 2000

    if (isPasskeyInvalid || isAmountInvalid) {
      setError({
        passkey: isPasskeyInvalid,
        amount: isAmountInvalid,
      });
      setErrorMessage(
        isPasskeyInvalid
          ? "Passkey must be exactly 4 digits."
          : "Amount limit must not exceed 2000."
      );
      return;
    }


    try {
      // Make API call to /setAccountSettings
      const fullPhoneNumber = `${values.countryCode}${values.phoneNumber}`;
      const response = await axios.post("http://localhost:4000/api/setAccountSettings", {
        phoneNumber: fullPhoneNumber, // Assuming phone number is in `values`
        passkey: values.passkey,
        amountLimit: values.amount,
      });

      // If successful, proceed to the next step
      console.log("API Response:", response.data);
      setError({ passkey: false, amount: false });
      setErrorMessage("");
      nextStep();
    } catch (err) {
      // Handle API errors
      console.error("API Error:", err.response?.data || err.message);
      setErrorMessage(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <Card bg="transparent">
      <Box as="form" p="4" onSubmit={submitFormData}>
        {/* Passkey Input */}
        <FormControl mb="4" isInvalid={error.passkey}>
          <FormLabel color="white">Passkey</FormLabel>
          <Input
            type="text"
            placeholder="Enter your passkey"
            value={values.passkey || ""}
            onChange={(e) => {
              handleFormData("passkey", e.target.value);
              setError((prev) => ({ ...prev, passkey: false }));
            }}
            errorBorderColor="red.500"
            color="white"
          />
          {error.passkey && (
            <FormHelperText color="red.500">
              Passkey is required.
            </FormHelperText>
          )}
        </FormControl>

        {/* Amount Input */}
        <FormControl mb="4" isInvalid={error.amount}>
          <FormLabel color="white">Amount</FormLabel>
          <Input
            type="number"
            placeholder="Enter amount"
            value={values.amount || ""}
            onChange={(e) => {
              handleFormData("amount", e.target.value);
              setError((prev) => ({ ...prev, amount: false }));
            }}
            errorBorderColor="red.500"
            color="white"
          />
          {error.amount && (
            <FormHelperText color="red.500">
              Amount is required.
            </FormHelperText>
          )}
        </FormControl>

        {/* Error Message */}
        {errorMessage && (
          <Text color="red.500" mb="4">
            {errorMessage}
          </Text>
        )}

        {/* Navigation Buttons */}
        <Box display="flex" justifyContent="space-between" mt="4">
          <Button colorScheme="blue" onClick={prevStep}>
            Previous
          </Button>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default StepThree;
