import React, {useState} from 'react';
import {Box, Center, Flex, Heading, Input} from "@chakra-ui/react";

const StakeMenu = () => {
    const [staked, setStaked] = useState("0.0000");

    return (
        <Center>
         <Flex shadow="dark-lg" w="100%" h="100%" direction="row" borderWidth="1px" style={{boxSizing: "border-box"}} justify="space-evenly">
             <Flex direction="column" ml="5%" justify="space-evenly">
                 <Heading size="sm" style={{flexWrap: "nowrap"}} >Staked: {staked}</Heading>
                 <Heading size="sm" mt="50%" justify="flex-end" >Polygon ETH LP: </Heading>
             </Flex>
             <Flex direction="column" justify="space-evenly" align="center">
                 <Heading as="h4" size="sm" w="50%" h="50%" mr="5%" ml={15} style={{alignContent:"flex-end"}}>Balance: </Heading>
                    <Input type="tel" size="sm" h="50%" w="50%" ml={15} mt="50%" placeholder="0.00" />
             </Flex>

         </Flex>
        </Center>
    );
}

export default StakeMenu;