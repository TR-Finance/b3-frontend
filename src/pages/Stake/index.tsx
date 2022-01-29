import { Box, Center, Heading } from '@chakra-ui/react';
import StakeMenu from "../../components/stake/StakeMenu";

const Stake = () => (
  <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" w="100%" h="100%">
      <Heading as="h1" style={{textAlign: "center"}} size="lg" letterSpacing="tighter">
        Stake
      </Heading>
      <Center>
          <StakeMenu />
      </Center>

  </Box>
);

export default Stake;
