import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {
  Button,
  Select,
  FormControl,
  FormLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const StepFive = ({ prevStep, handleFormData, values, nextStep, setQrCodeUrl }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const languages = ["English", "Hindi", "German", "Spanish", "French"];
  const accounts = [
    "0xDB43C56E14D41CeA246c0f61Cb1A4ffe5a7Ef6AB",
    "0x5641d2662FD845aD86a627cD8181734C1b3335c0",
  ];
  const cryptocurrencies = ["Ethereum", "Bitcoin", "Litecoin", "USDC"];

  const generateQrCode = async () => {
    try {
      // API call to /getQrCode
      const response = await axios.post("http://localhost:4000/api/getQrCode", {
        recipientAddress: values.account,
        recipientCrypto: values.cryptocurrency,
        language: values.language,
      });

      // Update the QR code URL in the parent state
      setQrCodeUrl(response.data.qrCode);

      // Proceed to the next step
      nextStep();
    } catch (err) {
      console.error("Error generating QR code:", err.response?.data || err.message);
      setErrorMessage(
        err.response?.data?.error || "Failed to generate QR code. Please try again."
      );
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <form>
            <FormControl mb="4">
              <FormLabel>Language of Transaction</FormLabel>
              <Select
                placeholder="Select Language"
                value={values.language || ""}
                onChange={(e) => handleFormData("language", e.target.value)}
                bg="black"
                color="white"
                borderColor="gray.400"
                _focus={{ bg: "black", borderColor: "blue.500" }}
                _hover={{ bg: "black" }}
                sx={{
                  option: {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Select Account</FormLabel>
              <Select
                placeholder="Select Account"
                value={values.account || ""}
                onChange={(e) => handleFormData("account", e.target.value)}
                bg="black"
                color="white"
                borderColor="gray.400"
                _focus={{ bg: "black", borderColor: "blue.500" }}
                _hover={{ bg: "black" }}
                sx={{
                  option: {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                {accounts.map((account) => (
                  <option key={account} value={account}>
                    {account}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Select Cryptocurrency</FormLabel>
              <Select
                placeholder="Select Cryptocurrency"
                value={values.cryptocurrency || ""}
                onChange={(e) => handleFormData("cryptocurrency", e.target.value)}
                bg="black"
                color="white"
                borderColor="gray.400"
                _focus={{ bg: "black", borderColor: "blue.500" }}
                _hover={{ bg: "black" }}
                sx={{
                  option: {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                {cryptocurrencies.map((crypto) => (
                  <option key={crypto} value={crypto}>
                    {crypto}
                  </option>
                ))}
              </Select>
            </FormControl>

            {/* Display error message if API call fails */}
            {errorMessage && (
              <Text color="red.500" mb="4">
                {errorMessage}
              </Text>
            )}

            <Flex justifyContent="space-between" mt="4">
              <Button colorScheme="blue" onClick={prevStep}>
                Previous
              </Button>
              <Button colorScheme="green" onClick={generateQrCode}>
                Generate
              </Button>
            </Flex>
          </form>
          <br />
        </Card.Body>
      </Card>
    </>
  );
};

export default StepFive;
