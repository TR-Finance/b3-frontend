import React from 'react';
import { Box, Center, Heading, Select } from '@chakra-ui/react';

const NetworksMenu = () => {

  return (
    <Box m={25}>
      <Center flexDir="row" width={650}>
        <Select>
          <option>ETH</option>
          <option>ARB</option>
        </Select>
        <Heading m={15}>on</Heading>
        <Select />
      </Center>
    </Box>
  );
};

export default NetworksMenu;