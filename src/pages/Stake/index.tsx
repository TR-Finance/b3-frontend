import {Box, Center, Heading} from "@chakra-ui/react";
import {useState} from "react";
import NetworksMenu from "../../components/stake/NetworksMenu";

const Stake = () =>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" w="100%" h="100%">
            <Center flexDir="column">
                <Heading as="h1" size="lg" letterSpacing="tighter">Add Liquidity</Heading>
                <NetworksMenu />
            </Center>
        </Box>


export default Stake;
