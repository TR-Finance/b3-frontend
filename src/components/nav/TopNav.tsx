import { Box, Button, HStack, Center } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import ConnectWallet from '../wallet/ConnectWallet';

const TopNav = () => {
  const location = useLocation();

  return (
    <nav>
      <HStack
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
        <Box w="100%" display="flex" justifyContent="space-between" paddingLeft="20%" paddingRight="20%">
          <Link to="/withdraw">
            <Button
              colorScheme="red"
              variant={location.pathname === '/' || location.pathname === '/withdraw' ? 'solid' : 'ghost'}
            >
              Withdraw
            </Button>
          </Link>
          <Link to="/stake">
            <Button colorScheme="red" variant={location.pathname === '/stake' ? 'solid' : 'ghost'}>
              Stake
            </Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="red" variant={location.pathname === '/about' ? 'solid' : 'ghost'}>
              About
            </Button>
          </Link>
        </Box>
        <Box w="100%" p={1}>
          <ConnectWallet />
        </Box>
      </HStack>
    </nav>
  );
};

export default TopNav;
