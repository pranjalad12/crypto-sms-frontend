// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Latest Trends
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        The global cryptocurrency market cap is now over $1 trillion, driven by
        rapid adoption and institutional investments. Bitcoin, the largest
        cryptocurrency, has a market cap exceeding $500 billion. Ethereum,
        known for its smart contracts, is driving innovation in decentralized
        finance (DeFi) and NFTs. Blockchain technology is being adopted by
        industries like healthcare, finance, and supply chain to improve
        transparency and efficiency.
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Bitcoin's Market Cap"
          value="$500+ Billion"
        />
        <Information
          boxShadow={cardShadow}
          title="Ethereum's Role"
          value="Smart Contracts & DeFi"
        />
        <Information
          boxShadow={cardShadow}
          title="Top Use Case"
          value="Decentralized Finance (DeFi)"
        />
        <Information
          boxShadow={cardShadow}
          title="Global Adoption"
          value="Increasing Rapidly"
        />
        <Information
          boxShadow={cardShadow}
          title="NFT Market"
          value="Revolutionizing Digital Art"
        />
        <Information
          boxShadow={cardShadow}
          title="Blockchain Usage"
          value="Healthcare, Finance, Supply Chain"
        />
      </SimpleGrid>
    </Card>
  );
}
