import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import backgroundImage from "./assets/images/background.png";
import bootcampLogo from "./assets/images/logoWeb.png";
import reward from "./assets/images/reward.gif";
import React, { useState } from "react";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";

export default function YourComponent() {
  const [isAvailable, setIsAvailable] = useState(false);
  const addRecentTransaction = useAddRecentTransaction();

  return (
    // Creating the page background
    <Box
      w={"100vw"}
      h={"100vh"}
      bg={"#000000"}
      bgImage={backgroundImage}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      overflowX={"hidden"}
    >
      {/* Creating the page header */}
      <Center pt={"4"}>
        <Image src={bootcampLogo} w={"130px"} />
      </Center>

      <Stack
        direction={["column-reverse", "column-reverse", "row-reverse"]}
        px={["8", "14", "12"]}
      >
        <Box pt={"8"} w={["100%", "100%", "50%"]}>
          <Center>
            <Box
              borderRadius={"md"}
              pt={["2", "4"]}
              pb={"7"}
              px={["2", "4"]}
              bg={"white"}
            >
              <Image src={reward} w={"450px"} pb={"7"} />
              <Center>
                <HStack gridGap={"1"}>
                <ConnectButton
                  label="Connect Your Wallet"
                  showBalance={false}
                  accountStatus={"address"}
                />
                <Button
                  colorScheme={"blackAlpha"}
                  fontWeight={"800"}
                  borderRadius={"xl"}
                  // isDisabled={!isAvailable}
                >
                  Claim NFT
                </Button>
                </HStack>
              </Center>
            </Box>
          </Center>
        </Box>
        <Box pt={"14"} w={["100%", "100%", "50%"]}>
          <Center h={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Box>
              <Heading color={"white"} size={"4xl"}>
                Collect Your First NFT Now
              </Heading>
              <br />
              <Text
                fontSize={"2xl"}
                fontFamily={"League Spartan"}
                color={"white"}
                fontWeight={"300"}
                lineHeight={"28px"}
              >
                Connect your wallet and claim your exclusive NFT on Polygon.
              </Text>
              <HStack gridGap={"4"}>
                {/* <ConnectButton
                  label="Connect Your Wallet"
                  accountStatus={"full"}
                /> */}
              </HStack>
            </Box>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
}
