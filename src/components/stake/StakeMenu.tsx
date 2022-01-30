import React, {useState} from 'react';
import {Center, Flex, Heading, Input} from "@chakra-ui/react";
import ARBLogo from '../../assets/logos/arb';

const StakeMenu = () => {
    const [staked, setStaked] = useState("0.0000");
    const [balance, setBalance] = useState("0.0000");

    const onChangeBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBalance(event.target.value);
    }

    return (
        <Center>
         <Flex shadow="dark-lg" p={15} direction="row" borderWidth="1px" style={{minHeight: '175px'}}>
             <Flex direction="column" w='50%' ml="5%" justify="space-between">
                 <Heading size="sm" >Staked: {staked}</Heading>
                 <Flex direction="row" align='center'>
                    <ARBLogo style={{maxWidth: '25px', maxHeight: '25px', marginRight:'5px'}} />
                    <Heading size="sm" style={{flexWrap: 'nowrap'}} w="50%" >Arbitrum ETH LP</Heading>
                 </Flex>
             </Flex>
             <Flex direction="column" w='50%' mr='5%' justify="space-between">
                 <Heading size="sm">Balance: {balance}</Heading>
                    <Input type="tel" size="sm" value={balance} placeholder="0.00" onChange={onChangeBalance} />
             </Flex>


         </Flex>
        </Center>
    );
}

export default StakeMenu;