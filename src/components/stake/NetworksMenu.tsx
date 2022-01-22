import React, {useState} from 'react';
import {Box, Select, Center, Heading, Icon} from "@chakra-ui/react";
import ethLogo from '../../assets/logos/eth.svg';
import arbLogo from '../../assets/logos/arbitrum.svg';

const NetworksMenu = () => {

    const options = [
        {
            ticker: 'ETH',
            logo: <div><img src={ethLogo} height="30px" width="30px" alt=''/>ETH </div>
        },
        {
            ticker: 'ARB',
            logo: <div><img src={arbLogo} height="30px" width="30px" alt=''/>ARB </div>
        }
    ];

    return (
        <Box m={25}>
            <Center flexDir="row" width={250}>
                <Select options={options} />
                <Heading m={15}>on</Heading>
                <Select size='lg' />
            </Center>
        </Box>
    );
};

export default NetworksMenu;