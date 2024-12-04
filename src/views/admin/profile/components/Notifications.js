// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function CryptoInfo(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card mb="20px" mt="40px" mx="auto" maxW="410px" {...rest}>
      <Flex align="center" w="100%" justify="space-between" mb="30px">
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mb="4px"
        >
          Crypto Information
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="1"
        label="Receive price alerts"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="2"
        label="Market news updates"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="3"
        label="Transaction confirmations"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="4"
        label="Wallet security tips"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="5"
        label="Educational articles"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="6"
        label="Upcoming events and webinars"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="7"
        label="New cryptocurrency listings"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="8"
        label="Weekly market analysis"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="9"
        label="Subscribe to crypto insights"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        id="10"
        label="Email me for trending tokens"
      />
    </Card>
  );
}
