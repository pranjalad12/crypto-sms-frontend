import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useState, useEffect } from "react";
import { MdBarChart } from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import {
  columnsDataCheck,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import axios from "axios";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  // State to store the balance
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // Using the phone number directly in the URL
        const response = await axios.get(
          "http://localhost:4000/api/getBalance/+917611107789"
        );
        setBalance(response.data.balance || 0); // Set the balance or default to 0
      } catch (error) {
        console.error("Error fetching balance:", error.response?.data || error.message);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        spacing="30px"
        mb="30px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Balance"
          value={`$${balance.toFixed(2)}`} // Display balance with two decimal places
        />
      </SimpleGrid>

      <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
    </Box>
  );
}
