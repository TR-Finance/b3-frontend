import React, {useState} from 'react';
import {Box, Center, Heading, Icon} from "@chakra-ui/react";
import Select, {components} from 'react-select';
import {ReactComponent as ETHLogo} from '../../assets/logos/eth.svg';
import {ReactComponent as ARBLogo} from '../../assets/logos/arbitrum.svg';

const NetworksMenu = () => {

    const options = [
        {
            label: <div style={{textAlign: 'right', justifyContent: 'right'}}>ETH</div>,
            logo: <ETHLogo style={{maxWidth: 25, maxHeight: 25}} />,
        },
        {
            label: <div style={{textAlign: 'right', justifyContent: 'right'}}>ARB</div>,
            logo: <ARBLogo style={{maxWidth: 25, maxHeight: 25}}/>,
        }
    ];

    const { Option } = components;
    /* eslint-disable react/prop-types */
    const listOptions = (props:any) => (
        /* eslint-disable react/jsx-props-no-spreading */
        <Option {...props} style={{minWidth: 450, minHeight:450}}>
            {props.data.logo}
            {props.data.value}
        </Option>
    );

    return (
        <Box m={25}>
            <Center flexDir="row" width={650}>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    components={{ Option: listOptions }}
                />
                <Heading m={15}>on</Heading>
                <Select />
            </Center>
        </Box>
    );
};

export default NetworksMenu;