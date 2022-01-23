import { Box } from '@chakra-ui/react';
import MainPageLinks from './MainPageLinks';

// Only shown on mobile
const BottomNav = () => (
  <Box display={{ base: 'flex', md: 'none' }} w="100%" justifyContent="center">
    <MainPageLinks />
  </Box>
);

export default BottomNav;
