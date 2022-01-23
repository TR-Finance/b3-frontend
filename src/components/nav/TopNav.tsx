import { Box, HStack, Center } from '@chakra-ui/react';

import ConnectWallet from '../wallet/ConnectWallet';
import MainPageLinks from './MainPageLinks';

const TopNav = () => (
  <nav style={{ width: '100%', height: '100%' }}>
    <HStack
      w="100%"
      h="100%"
      justify="stretch"
      borderBottomWidth={2}
      bg="whitesmoke"
      borderBottomColor="lightgray"
      paddingLeft={2}
      paddingRight={2}
    >
      <Box w="100%" p={1}>
        <Box bg="black" h="50px" w="50px" p={4} color="white">
          <Center>B^3</Center>
        </Box>
      </Box>

      {/* Only shown on desktop */}
      <Box display={{ base: 'none', md: 'flex' }} w="100%" justifyContent="center">
        <MainPageLinks />
      </Box>

      <Box w="100%">
        <ConnectWallet />
      </Box>
    </HStack>
  </nav>
);

export default TopNav;
